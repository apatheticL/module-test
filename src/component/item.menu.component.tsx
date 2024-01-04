import {
  ImageProps,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, ReactElement} from 'react';
import {pxToPercentage} from '../core/libs/utils';
import {textStyle} from '@src/component/text-style';
import {Colors} from '@src/core/Colors';

interface ItemMenuComponentProps {
  imageSource: IconProp;
  title: string;
  styleTitle?: StyleProp<TextStyle>;
  onPress: () => void;
}

type IconProp = (style: ImageStyle) => ReactElement<ImageProps>;

export const ItemMenuComponent: FC<ItemMenuComponentProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.viewContainer}>
      <View style={styles.viewIcon}>{props.imageSource(styles.images)}</View>
      <Text style={styles.txtTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  viewIcon: {
    borderRadius: pxToPercentage(8),
    paddingHorizontal: pxToPercentage(10),
    paddingVertical: pxToPercentage(4),
    borderWidth: pxToPercentage(0.5),
    borderColor: Colors['border-color'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: pxToPercentage(32),
    height: pxToPercentage(32),
    borderRadius: pxToPercentage(16),
    marginBottom: pxToPercentage(10),
  },
  txtTitle: {
    ...textStyle.sfProTextRegular,
    fontSize: pxToPercentage(14),
    color: Colors['main-txt-color-4'],
    textAlign: 'center',
  },
  viewContainer: {
    paddingHorizontal: pxToPercentage(16),
    width: pxToPercentage(100),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
