import React, {useRef, useState} from 'react';
import {Animated, Platform, ScrollView, StyleSheet, View} from 'react-native';
import {BannerComponent} from '@src/component/banner.component';
import {ImageBanner} from '@src/core/data';
import {ListItemMenu} from '@src/component/list-item-menu';
import {Colors} from '@src/core/Colors';
import {ProductInfoModel} from '@src/core/model/product-model';
import {FlashSaleTopComponent} from '@src/screens/home/component/FlashSaleTopComponent';
import {pxToPercentage} from '@src/core/libs/utils';
import {Example} from '@src/screens/home/component/CustomFile';
import {SaleTopComponent} from '@src/screens/home/component/SaleTopComponent';
import { useNavigation } from "@react-navigation/native";
import { MainStackNavigationProp } from "@src/navigation/MainNavigator";

const maxHeight = pxToPercentage(300);
const HomeScreen = () => {
  const scrollYAnimatedValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<MainStackNavigationProp>();
  const onFastSalePress = () => {
  };
  const onProductPress = () => {
  };
  const onTimageSale = () => {
    navigation.navigate('productMarketPlaceContainer');
  };
  const onVoucher = () => {
  };
  const onItemPress = (item: ProductInfoModel) => {};
  const headerHeight = scrollYAnimatedValue.interpolate({
    inputRange: [0, maxHeight],
    outputRange: [maxHeight, 0],
    extrapolate: 'extend',
  });

  return (
    <View style={{flex: 1}}>
      <ScrollView
        scrollEventThrottle={16}
        style={{flex: 1}}
        onScroll={
          Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollYAnimatedValue,
                },
              },
            },
          ])
          // {useNativeDriver: true}
        }
        contentContainerStyle={{paddingTop: 0}}>
        <Animated.View
          style={[
            {
              height: headerHeight,
              backgroundColor: Colors['background-color-2'],
              marginBottom: pxToPercentage(8),
            },
          ]}>
          <BannerComponent images={ImageBanner} />
          <ListItemMenu
            onFastSalePress={onFastSalePress}
            onProductPress={onProductPress}
            onTimageSale={onTimageSale}
            onVoucher={onVoucher}
          />
        </Animated.View>
        <FlashSaleTopComponent
          onItemPress={onItemPress}
          onShowAll={onFastSalePress}
        />
        <SaleTopComponent
          onShowAll={onTimageSale}
          onItemPress={onItemPress}
        />
        <Example />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHeader: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? pxToPercentage(20) : 0,
    left: 0,
    right: 0,
    zIndex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    elevation: 1,
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },
});

export default HomeScreen;
