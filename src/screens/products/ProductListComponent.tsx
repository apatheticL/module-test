import React, {useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {ProductInfoModel} from '@src/core/model/product-model';
import {CartItemModel} from '@src/core/model/cart-item.model';
import {Hr} from '@src/component/hr';
import {InputNoPointEvent} from '@src/component/input-search-no-pointevent.component';
import {pxToPercentage} from '@src/core/libs/utils';
import {textStyle} from '@src/component/text-style';
import {ArrowLeft3Icon, BagIcon} from '@src/assets/icons';
import {TopMarketPlaceNavigationBar} from '@src/component/top-navigation-bar';
import {ProductItemNew} from '@src/component/product-item-new.component';
import {PagingModel} from '@src/core/model/paging.model';
import {ProductMarketPlaceItem} from '@src/screens/products/component/ProductMarketPlaceItem';
import {Colors} from '@src/core/Colors';

interface ProductDetailProps {
  productsRecommend: ProductInfoModel[];
  products: ProductInfoModel[];
  productsRecent: ProductInfoModel[];
  productsOnCart: CartItemModel[];
  paging: PagingModel;
  loading: boolean;
  onBackPress: () => void;
  onGotoCart: () => void;
  onRefresh: () => void;
  onGetMore: () => void;
  onSearchPress: () => void;
  onPressProductItem: (item: ProductInfoModel) => void;
}

export const ProductMarketPlaceComponent: React.FunctionComponent<
  ProductDetailProps
> = props => {
  const numberProduct = useMemo(() => {
    let sum = 0;
    props.productsOnCart?.map(item => {
      sum += item.cartProducts.length;
    });
    return sum;
  }, [props.productsOnCart]);

  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState<boolean>(false);

  const renderItemProductList = ({
    item,
    index,
  }: {
    item: ProductInfoModel;
    index: number;
  }) => {
    return (
      <View>
        <ProductItemNew
          item={item}
          onPressItem={() => {
            props.onPressProductItem(item);
          }}
        />
        <Hr
          style={
            index == props.products.length - 1
              ? {borderBottomColor: 'transparent'}
              : {}
          }
        />
      </View>
    );
  };

  const renderFooter = () => {
    if (
      props.paging.totalItems === props.products.length ||
      props.products.length < 10
    ) {
      return <View />;
    } else {
      return null;
    }
  };
  const renderLoading = () => {
    if (props.loading) {
      return <View />;
    }

    if (!props.loading) {
      return (
        <View style={styles.viewNodata}>
          <Text style={[styles.txt, styles.txtNodata]}>Khong có dữ liệu</Text>
        </View>
      );
    }

    return <View />;
  };
  const renderListHeaderComponent = () => {
    return (
      <View>
        {/*Recommend Product*/}
        {props.productsRecommend && props.productsRecommend.length > 0 && (
          <View>
            <Hr style={[styles.hr10]} />
            <View style={[styles.contentContainer]}>
              <Text
                style={[
                  styles.fontSize18,
                  styles.textSemiBold,
                  styles.padHorz16,
                  styles.padVert16,
                ]}>
                marketplace.Productsforyou
              </Text>
              <ScrollView
                style={[styles.caseView, styles.scrollView]}
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}}
                horizontal={true}>
                {props.productsRecommend?.map((item, index) => {
                  return (
                    <ProductMarketPlaceItem
                      item={item}
                      index={index}
                      onPressProductItem={props.onPressProductItem}
                    />
                  );
                })}
              </ScrollView>
            </View>
          </View>
        )}
        <Hr style={[styles.hr10]} />
        {/*Viewed Product*/}
        {props.productsRecent && props.productsRecent?.length > 0 && (
          <View>
            <View style={[styles.contentContainer]}>
              <Text
                style={[
                  styles.fontSize18,
                  styles.textSemiBold,
                  styles.padHorz16,
                  styles.padVert16,
                ]}>
                marketplace.viewRecently
              </Text>
              <ScrollView
                style={[styles.caseView, styles.scrollView]}
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}}
                horizontal={true}>
                {props.productsRecent?.map((item, index) => {
                  return (
                    <>
                      <ProductMarketPlaceItem
                        item={item}
                        index={index}
                        onPressProductItem={props.onPressProductItem}
                      />
                    </>
                  );
                })}
              </ScrollView>
            </View>
            <Hr style={[styles.hr10]} />
          </View>
        )}
        <View style={[styles.contentContainer]}>
          <Text
            style={[
              styles.fontSize18,
              styles.textSemiBold,
              styles.padHorz16,
              styles.padVert16,
            ]}>
            marketplace.listproduct
          </Text>
        </View>
        {props.loading && (
          <ActivityIndicator
            size={'small'}
            color={Colors['activity-indicator-color']}
            style={styles.loading}
          />
        )}
      </View>
    );
  };

  return (
    <View style={[styles.container]}>
      <TopMarketPlaceNavigationBar
        hasRightView={true}
        containerStyle={[styles.bgWhite, styles.padBot]}
        leftIcon={ArrowLeft3Icon}
        title=""
        onLeftPress={props.onBackPress}
        onRightPress={props.onGotoCart}
        rightComponent={
          <>
            {BagIcon([
              styles.iconBack,
              //  { marginRight: pxToPercentage(15) },
            ])}
            {numberProduct > 0 ? (
              <View style={styles.viewIcon}>
                <Text style={styles.txtCount}>{numberProduct}</Text>
              </View>
            ) : (
              <View />
            )}
          </>
        }
        centerComponent={
          <InputNoPointEvent
            onPress={props.onSearchPress}
            containerStyle={[styles.containerSearch]}
            title={'marketplace.searchProduct'}
          />
        }
      />

      {props.products && props.products.length === 0 && renderLoading()}

      {props.products && props.products.length > 0 && (
        <FlatList
          style={[styles.bgWhite]}
          ListHeaderComponent={renderListHeaderComponent}
          data={props.products ?? []}
          renderItem={renderItemProductList}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0.01}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderLoading}
          onMomentumScrollBegin={() => {
            setOnEndReachedCalledDuringMomentum(false);
          }}
          refreshControl={
            <RefreshControl
              onRefresh={() => props.onRefresh()}
              refreshing={false}
            />
          }
          onEndReached={() => {
            if (!onEndReachedCalledDuringMomentum) {
              props.onGetMore();
              setOnEndReachedCalledDuringMomentum(true);
            }
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: Colors['background-color-main'],
  },
  scrollView: {
    overflow: Platform.OS === 'ios' ? 'visible' : 'scroll',
  },
  containerSearch: {
    borderRadius: pxToPercentage(25),
    backgroundColor: Colors['background-color-2'],
    borderWidth: pxToPercentage(1),
    borderColor: Colors['border-color-01'],
  },
  bgWhite: {
    backgroundColor: Colors['background-color-2'],
  },
  productPriceOrigin: {
    textDecorationLine: 'line-through',
    // marginBottom: pxToPercentage(2),
  },
  contentContainer: {
    // marginTop: pxToPercentage(9),
    backgroundColor: Colors['background-color-2'],
  },
  marginBot5: {
    marginBottom: pxToPercentage(5),
  },
  containerInfo: {flex: 1, marginLeft: pxToPercentage(12)},
  containerTitle: {minHeight: pxToPercentage(65)},
  containerTitleVer: {minHeight: pxToPercentage(50)},
  iconBack: {
    width: pxToPercentage(25),
    height: pxToPercentage(25),
  },
  row: {
    flexDirection: 'row',
  },
  fontSize12: {
    fontSize: pxToPercentage(12),
  },
  fontSize14: {
    fontSize: pxToPercentage(14),
  },
  fontSize16: {
    fontSize: pxToPercentage(16),
  },
  fontSize15: {
    fontSize: pxToPercentage(15),
  },
  fontSize18: {
    fontSize: pxToPercentage(18),
  },
  padBot: {paddingBottom: pxToPercentage(12)},
  pad10: {
    paddingHorizontal: pxToPercentage(16),
    // paddingBottom: pxToPercentage(1000),
  },
  textSemiBold: {
    ...textStyle.sfProTextSemiBold,
    color: Colors['main-txt-color-4'],
  },
  txtBlue: {
    color: Colors['main-txt-color-5'],
  },
  textRegular: {
    ...textStyle.sfProTextRegular,
    color: Colors['main-txt-color-4'],
  },
  padHorz16: {
    paddingHorizontal: pxToPercentage(16),
  },
  padVert16: {
    paddingVertical: pxToPercentage(16),
  },
  opacity70: {
    opacity: 0.7,
  },
  viewNodata: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNodata: {
    marginTop: pxToPercentage(10),
    color: Colors['app-txt-color-7'],
  },
  txt: {
    fontSize: pxToPercentage(16),
    ...textStyle.sfProTextBold,
    textAlign: 'center',
    lineHeight: pxToPercentage(24),
  },
  cardContainer: {
    marginRight: pxToPercentage(16),
    // flex: 1,
    width: pxToPercentage(150),
  },
  cardContainerRow: {
    // marginRight: pxToPercentage(16),
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: pxToPercentage(16),
    // width: pxToPercentage(150),
  },
  footerContainer: {
    flexDirection: 'row',
    marginTop: pxToPercentage(8),
  },
  loading: {
    width: '100%',
    alignItems: 'center',
    marginTop: pxToPercentage(12),
  },
  hr10: {
    backgroundColor: Colors['background-color-9'],
    borderBottomColor: Colors['background-color-9'],
    height: pxToPercentage(9),
    marginVertical: pxToPercentage(0),
  },
  viewIcon: {
    backgroundColor: 'red',
    aspectRatio: 1,
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    borderRadius: pxToPercentage(20),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: pxToPercentage(-5),
    top: pxToPercentage(-6),
  },
  caseView: {
    width: '100%',
    // marginTop: pxToPercentage(5),
    marginBottom: pxToPercentage(20),
  },
  imageItem: {
    width: pxToPercentage(150),
    height: pxToPercentage(150),
    marginBottom: pxToPercentage(13),
  },
  imageItemRow: {
    width: pxToPercentage(100),
    height: pxToPercentage(100),
  },
  image: {
    flex: 1,
    borderRadius: pxToPercentage(10),
  },
  miniIcon: {
    width: pxToPercentage(15),
    height: pxToPercentage(15),
    marginRight: pxToPercentage(5),
  },
  txtCount: {
    ...textStyle.sfProTextRegular,
    fontSize: pxToPercentage(10),
    color: Colors['background-color-main'],
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
