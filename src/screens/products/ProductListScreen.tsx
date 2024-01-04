import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ProductInfoModel} from '@src/core/model/product-model';
import {PagingModel} from '@src/core/model/paging.model';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppConfigService} from '@src/core/app-config';
import {ProductMarketPlaceComponent} from '@src/screens/products/ProductListComponent';
import {MainStackParamList} from '@src/navigation/MainNavigator';
import {
  onThunkGetListProducts,
  onThunkGetListProductsRecent,
  onThunkGetListRecommendProducts,
} from '@src/store/product/thunk';

type MarketPlaceProd = CompositeScreenProps<
  NativeStackScreenProps<MainStackParamList>,
  NativeStackScreenProps<MainStackParamList, 'productMarketPlaceContainer'>
>;
export const ProductMarketPlaceContainer: React.FunctionComponent<
  MarketPlaceProd
> = props => {
  const [loading, setLoading] = useState(false);
  const [paging, setPaging] = useState<PagingModel>(new PagingModel());

  const dispatch = useDispatch<any>();

  const {products, productsRecommend} = useSelector(
    (state: any) => state?.products ?? {},
  );

  const [productsRecent, setProductsRecent] = useState<ProductInfoModel[]>([]);
  const [productIds, setProductIds] = useState<string[]>([]);
  const [isFocus, setFocused] = useState<boolean>(true);
  useEffect(() => {
    const didFocus = props.navigation.addListener('focus', () => {
      setFocused(true);
    });

    const didBlurSubscription = props.navigation.addListener('blur', () => {
      setFocused(false);
    });

    return () => {
      didFocus;
      didBlurSubscription;
    };
  }, []);

  useEffect(() => {
    if (isFocus) {
      const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('productIds');
          if (value !== null) {
            console.log('value', value);
            setProductIds(JSON.parse(value));
            // dispatch(onGetListProductIds(JSON.parse(value)));
            // We have data!!
          } else {
            setProductIds([]);
            // dispatch(onGetListProductIds([]));
          }
        } catch (error) {
          console.log('error', error);
          // Error retrieving data
        }
      };
      retrieveData().catch(e => console.log('e', e));
    }
  }, [isFocus]);
  useEffect(() => {
    if (productIds && productIds.length > 0) {
      dispatch(
        onThunkGetListProductsRecent(
          AppConfigService.getAppConfig(),
          productIds,
          data => {
            setProductsRecent(data);
            //  console.log('data', data);
          },
          message => {
            console.log('message: ', message);
          },
        ),
      );
    }
  }, [productIds]);

  useEffect(() => {
    setLoading(true);
    init();
  }, []);

  const onSuccessList = (page: PagingModel, _loadMore: boolean) => {
    setLoading(false);
    setPaging(page);
  };
  const onGoBack = () => {
    console.log('GoBack');
    // props.navigation.goBack();
    props.navigation.goBack();
  };
  const onGetMore = () => {
    if (paging.start >= paging.totalPages) {
      return;
    }
    setLoading(true);
    dispatch(
      onThunkGetListProducts(
        AppConfigService.getAppConfig(),
        {
          ...paging,
          start: paging.start + 1,
        },
        '',
        true,
        onSuccessList,
        message => {
          setLoading(false);
          console.log('message: ', message);
        },
      ),
    );
  };
  const onRefresh = () => {
    setLoading(true);
    dispatch(
      onThunkGetListProducts(
        AppConfigService.getAppConfig(),
        {
          ...paging,
        },
        '',
        false,
        onSuccessList,
        () => {
          setLoading(false);
        },
      ),
    );
  };

  const onGoToCart = () => {
    console.log('Cart');
  };
  const onSearchPress = () => {
    console.log('Search');
    // @ts-ignore
  };

  const storeData = async (ids: string[]) => {
    try {
      await AsyncStorage.setItem('productIds', JSON.stringify(ids));
    } catch (error) {
      // Error saving data
    }
  };

  const onPressProductItem = (item: ProductInfoModel) => {
    const ids = [...productIds];
    const isExisted = ids.findIndex(it => it === item.id);
    if (isExisted > -1) {
      ids.splice(isExisted, 1);
      ids.push(item.id);
      storeData(ids);
      setProductIds(ids);
    } else if (ids.length >= 10) {
      ids.shift();
      ids.push(item.id);
      storeData(ids);
      setProductIds(ids);
    } else {
      ids.push(item.id);
      storeData(ids);
      setProductIds(ids);
    }
    // dispatch(onGetListProductIds())
    // @ts-ignore
    props.navigation.navigate('productDetail', {
      productId: item.id,
    });
  };

  const init = () => {
    dispatch(
      onThunkGetListRecommendProducts(
        AppConfigService.getAppConfig(),
        '',
        new PagingModel(),
        () => {},
        message => {
          console.log('message: ', message);
        },
      ),
    );
    dispatch(
      onThunkGetListProducts(
        AppConfigService.getAppConfig(),
        paging,
        '',
        false,
        onSuccessList,
        message => {
          setLoading(false);
          console.log('message: ', message);
        },
      ),
    );
  };

  return (
    <ProductMarketPlaceComponent
      onBackPress={onGoBack}
      onGotoCart={onGoToCart}
      onSearchPress={onSearchPress}
      onPressProductItem={onPressProductItem}
      productsRecommend={productsRecommend ?? []}
      products={products ?? []}
      loading={loading}
      paging={paging}
      productsRecent={productsRecent ?? []}
      productsOnCart={[]}
      onGetMore={onGetMore}
      onRefresh={onRefresh}
    />
  );
};
