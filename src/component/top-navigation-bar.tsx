import React from 'react';
import {
  ImageProps,
  ImageStyle,
  Keyboard,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {isEmpty, pxToPercentage} from '../core/libs/utils';
import {textStyle} from './text-style';
import {ViewStyle} from 'react-native';
import {Colors} from '@src/core/Colors';
// import { SafeAreaView } from 'react-navigation';

export interface ComponentProps {
  title?: string | undefined;
  hasRightView: boolean;
  leftIcon?: IconProp;
  leftStyle?: StyleProp<ViewStyle>;
  leftIconStyles?: ImageStyle;
  rightIcon?: IconProp;
  rightText?: string;
  rightStyle?: StyleProp<ViewStyle>;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  disabledLeftIcon?: boolean;
  disabledRightIcon?: boolean;
  rightTextStyle?: StyleProp<TextStyle>;
  rightComponent?: (() => React.JSX.Element) | React.ReactElement;
  centerComponent?: (() => React.JSX.Element) | React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
}

type IconProp = (
  style: ImageStyle | ImageStyle[],
) => React.ReactElement<ImageProps>;

export type TopNavigationBarProps = ComponentProps;

export const TopMarketPlaceNavigationBar: React.FunctionComponent<
  TopNavigationBarProps
> = props => {
  const onLeftButtonPress = () => {
    if (props.onLeftPress) {
      props.onLeftPress();
    }
  };

  const onRightButtonPress = () => {
    if (props.onRightPress) {
      props.onRightPress();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, props.containerStyle]}>
        {/* <SafeAreaView style={styles.safeAreaView} /> */}
        <View style={styles.viewHeader}>
          <View style={[props.leftStyle]}>
            {props.leftIcon && (
              <TouchableOpacity
                style={[styles.viewLeft, props.leftStyle]}
                // activeOpacity={0.75}
                onPress={onLeftButtonPress}
                disabled={props.disabledLeftIcon}>
                {props.leftIcon([styles.icon, {...props.leftIconStyles}])}
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.viewCenter}>
            {!isEmpty(props.title) ? (
              <Text numberOfLines={1} style={styles.txtTitle}>
                {props.title}
              </Text>
            ) : (
              <View />
            )}
            {props.centerComponent}
          </View>
          {props.hasRightView && (
            <View style={[props.rightStyle]}>
              {props.rightComponent && (
                <TouchableOpacity
                  style={[styles.viewRight, props.rightStyle]}
                  activeOpacity={0.75}
                  onPress={onRightButtonPress}
                  disabled={props.disabledRightIcon}>
                  {props.rightComponent}
                </TouchableOpacity>
              )}
              {props.rightIcon && (
                <TouchableOpacity
                  style={[styles.viewRight, props.rightStyle]}
                  activeOpacity={0.75}
                  onPress={onRightButtonPress}
                  disabled={props.disabledRightIcon}>
                  {props.rightIcon(styles.icon)}
                </TouchableOpacity>
              )}
              {props.rightText && (
                <TouchableOpacity
                  style={[styles.viewRight, props.rightStyle]}
                  activeOpacity={0.75}
                  onPress={onRightButtonPress}>
                  <Text
                    style={[styles.txtBtn, props.rightTextStyle]}
                    numberOfLines={1}>
                    {props.rightText}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: pxToPercentage(12),
    paddingTop: pxToPercentage(16),
    // ...viewStyle.shadow,
    // backgroundColor: Colors['background-color-7'],
    // borderBottomLeftRadius: pxToPercentage(10),
    // borderBottomRightRadius: pxToPercentage(10),
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: pxToPercentage(55),
    // paddingHorizontal: pxToPercentage(16),
  },
  safeAreaView: {
    paddingTop: getStatusBarHeight(false),
  },
  viewLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(43),
    width: pxToPercentage(43),
    backgroundColor: Colors['background-color-9'],
    borderRadius: pxToPercentage(40),
    marginLeft: pxToPercentage(16),
  },
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewRight: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(43),
    width: pxToPercentage(43),
    borderRadius: pxToPercentage(40),
    backgroundColor: Colors['background-color-9'],
    marginRight: pxToPercentage(16),
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: pxToPercentage(16),
    color: Colors['main-color-1'],
    ...textStyle.sfProTextBold,
  },
  txtBtn: {
    textAlign: 'center',
    fontSize: pxToPercentage(16),
    color: Colors['main-color-2'],
    ...textStyle.sfProTextBold,
  },
  icon: {
    width: pxToPercentage(25),
    height: pxToPercentage(25),
  },
});
