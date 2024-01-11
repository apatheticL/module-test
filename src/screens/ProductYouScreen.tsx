import React from 'react';
import { FlatList, StyleSheet, View } from "react-native";
import {DataProduct} from '@src/core/data';
import {ItemProductComponent} from '@src/component/ItemProductComponent';
import {ProductInfoModel} from '@src/core/model/product-model';
import {pxToPercentage} from '@src/core/libs/utils';

const ProductYouScreen = () => {
  const itemPress = (item: ProductInfoModel) => {
    console.log(item);
  };
  return (
    <View style={[styles.container]}>
      <FlatList
        numColumns={3}
        nestedScrollEnabled
        scrollEnabled={true}
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

export default ProductYouScreen;
