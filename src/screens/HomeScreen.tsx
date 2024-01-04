import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BannerComponent} from '../component/banner.component';
import {ImageBanner} from '../core/data';
import {ListItemMenu} from '@src/component/list-item-menu';

const HomeScreen = () => {
  const onFastSalePress = () => {};
  const onProductPress = () => {};
  const onTimageSale = () => {};
  const onVoucher = () => {};

  return (
    <View style={styles.container}>
      <BannerComponent images={ImageBanner} />
      <ListItemMenu
        onFastSalePress={onFastSalePress}
        onProductPress={onProductPress}
        onTimageSale={onTimageSale}
        onVoucher={onVoucher}
      />
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
