import {pxToPercentage} from '../core/libs/utils';
import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {SearchIcon} from '../assets/icons';
import {textStyle} from './text-style';
import { Colors } from "@src/core/Colors";

interface ComponentProps {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export type SearchProps = ComponentProps;

export const InputNoPointEvent: React.FunctionComponent<
  SearchProps
> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.containerStyle]}>
      <View style={styles.viewLeftRight}>{SearchIcon(styles.iconSearch)}</View>
      <View style={styles.input} pointerEvents="none">
        <TextInput
          style={styles.input}
          placeholder={props.title}
          placeholderTextColor={Colors['main-txt-color-6']}
          underlineColorAndroid={'transparent'}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: pxToPercentage(13),
    flexDirection: 'row',
    height: pxToPercentage(43),
    borderRadius: pxToPercentage(40),
    // backgroundColor: Colors['input-search-background-color-2'],
    // marginRight: pxToPercentage(10),
  },
  viewLeftRight: {
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToPercentage(41),
    height: pxToPercentage(41),
  },
  input: {
    flex: 1,
    fontSize: pxToPercentage(16),
    paddingVertical: 0,
    ...textStyle.sfProTextRegular,
    color: Colors['main-txt-color-4'],
  },
  iconSearch: {
    width: pxToPercentage(24),
    height: pxToPercentage(24),
  },
});
