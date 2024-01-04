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
import {Colors} from '../core/Colors';

interface BannerComponentProps {
  images: string[];
  style?: StyleProp<ViewStyle>;
}

export const BannerComponent: FC<BannerComponentProps> = props => {
  return (
    <View style={{ backgroundColor: 'red'}}>
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
  dot: {
    // width: widthPxToPercentage(10),
    // height: widthPxToPercentage(10),
    // borderRadius: pxToPercentage(30),
    // backgroundColor: Colors['background-color'],
  },
  containerImage: {
    width: '100%',
    padding: 0,
    borderRadius: pxToPercentage(32),
  },
  image: {
    width: '100%',
    height: pxToPercentage(320),
    borderRadius: pxToPercentage(32),
  },
});
