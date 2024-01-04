import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import FastImage from 'react-native-fast-image';
import {
  deviceWidth,
  heightPxToPercentage,
  pxToPercentage,
  widthPxToPercentage,
} from '../core/libs/utils';
import {Colors} from '@src/core/Colors';

interface BannerComponentProps {
  images: string[];
  style?: StyleProp<ViewStyle>;
}

export const BannerComponent: FC<BannerComponentProps> = props => {
  return (
    <View style={styles.view}>
      <SliderBox
        images={props.images}
        dotStyle={styles.dot}
        resizeMode={'contain'}
        resizeMethod={'resize'}
        dotColor={'transparent'}
        inactiveDotColor={'transparent'}
        LoaderComponent={() => <View />}
        ImageComponent={(props: any) => {
          return (
            <View style={styles.containerImage}>
              <FastImage
                style={styles.image}
                source={props.source}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          );
        }}
        parentWidth={deviceWidth - widthPxToPercentage(25)}
        height={heightPxToPercentage(120)}
        autoplayInterval={5000}
        autoplayDelay={5000}
        autoplay={false}
        circleLoop
        paginationBoxVerticalPadding={0}
        borderRadius={12}
        onCurrentImagePressed={(index: any) => {
          console.log(props.images[index]);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    height: pxToPercentage(180),
  },
  dot: {
    width: widthPxToPercentage(6),
    height: widthPxToPercentage(6),
    borderRadius: pxToPercentage(30),
    backgroundColor: Colors['app-txt-auth-color'],
  },
  containerImage: {
    width: '100%',
    height: heightPxToPercentage(180),
    overflow: 'hidden',
    borderRadius: pxToPercentage(32),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: pxToPercentage(32),
  },
});
