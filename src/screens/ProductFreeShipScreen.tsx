import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { MainStackNavigationProp } from "../navigation/MainNavigator";

const ProductFreeShipScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>Product for free ship</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 40
  }
});

export default ProductFreeShipScreen;
