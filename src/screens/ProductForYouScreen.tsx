import React from 'react';
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import {DataProduct} from '@src/core/data';
import {ItemProductComponent} from '@src/component/ItemProductComponent';
import {ProductInfoModel} from '@src/core/model/product-model';
import {pxToPercentage} from '@src/core/libs/utils';
import { Tabs } from "react-native-collapsible-tab-view";

const ProductForYouScreen = () => {
  const itemPress = (item: ProductInfoModel) => {
    console.log(item);
  };
  return (
    <View style={[styles.container]}>
      <Tabs.FlatList
        numColumns={3}
        nestedScrollEnabled={false}
        scrollEnabled={false}
        data={DataProduct}
        renderItem={({item, index}) => {
          return (
            <ItemProductComponent
              item={item}
              key={index}
              onItemPress={itemPress}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: pxToPercentage(10),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ProductForYouScreen;
