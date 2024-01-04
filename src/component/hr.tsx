import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { pxToPercentage } from '../core/libs/utils';
import { Colors } from "@src/core/Colors";

export const Hr: React.FunctionComponent<ViewProps> = (props) => {
  return <View style={[styles.hr, props.style]} />;
};

const styles = StyleSheet.create({
  hr: {
    width: '100%',
    borderBottomColor: Colors['background-color-9'],
    borderBottomWidth: pxToPercentage(1),
    marginVertical: pxToPercentage(16),
  },
});
