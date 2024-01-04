import {
  ImageProps,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle, TouchableOpacity,
  View
} from "react-native";
import {FC} from 'react';
import {pxToPercentage} from '../core/libs/utils';
import {textStyle} from '@src/component/text-style';
import {Colors} from '@src/core/Colors';

interface ItemMenuComponentProps {
  imageSource: IconProp;
  title: string;
  styleTitle?: StyleProp<TextStyle>;
  onPress: () => void;
}
type IconProp = (style: ImageStyle) => React.ReactElement<ImageProps>;

export const ItemMenuComponent: FC<ItemMenuComponentProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.viewContainer}>
      {props.imageSource(styles.images)}
      <Text style={styles.txtTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  images: {
    width: pxToPercentage(46),
    height: pxToPercentage(46),
    borderRadius: pxToPercentage(16),
    marginBottom: pxToPercentage(10),
  },
  txtTitle: {
    ...textStyle.sfProTextRegular,
    fontSize: pxToPercentage(14),
    color: Colors['main-txt-color-4'],
  },
  viewContainer:{
    paddingHorizontal: pxToPercentage(16),
    paddingVertical: pxToPercentage(8),
  }
});
