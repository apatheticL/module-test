import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {BannerComponent} from '@src/component/banner.component';
import {FlashSaleProduct, ImageBanner} from '@src/core/data';
import {ListItemMenu} from '@src/component/list-item-menu';
import {Colors} from '@src/core/Colors';
import {HorizontalListComponent} from '@src/component/HorizontalListComponent';
import {ProductInfoModel} from '@src/core/model/product-model';
import {FlashSaleTopComponent} from '@src/screens/home/component/FlashSaleTopComponent';
import {pxToPercentage} from '@src/core/libs/utils';
import {SaleTopComponent} from '@src/screens/home/component/SaleTopComponent';

const HomeScreen = () => {
  const onFastSalePress = () => {};
  const onProductPress = () => {};
  const onTimageSale = () => {};
  const onVoucher = () => {};
  const onItemPress = (item: ProductInfoModel) => {};
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: Colors['background-color-2'],
            marginBottom: pxToPercentage(8),
          }}>
          <BannerComponent images={ImageBanner} />
          <ListItemMenu
            onFastSalePress={onFastSalePress}
            onProductPress={onProductPress}
            onTimageSale={onTimageSale}
            onVoucher={onVoucher}
          />
        </View>
        <FlashSaleTopComponent
          onItemPress={onItemPress}
          onShowAll={onFastSalePress}
        />
        <SaleTopComponent onShowAll={onTimageSale} onItemPress={onItemPress} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },
});

export default HomeScreen;
