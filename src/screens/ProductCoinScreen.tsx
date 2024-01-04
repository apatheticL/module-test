import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

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
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },
});

export default ProductCoinScreen;
