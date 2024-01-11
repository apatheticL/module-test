import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { pxToPercentage } from "@src/core/libs/utils";

const ProductCoinScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Product for Coin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToPercentage(414),
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },
});

export default ProductCoinScreen;
