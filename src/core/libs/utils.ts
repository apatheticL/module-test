import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const deviceWidth = width;
export const deviceHeight = height;
const percentageWidth: number = width / 375;
const percentageHeight: number = height / 812;
const percentageWidthOld: number = width / 414;
// size for new design (July2023)
export const widthPxToPercentage = (value: number): number => {
  return percentageWidth * value;
};
export const pxToPercentage = (value: number): number => {
  return percentageWidthOld * value;
};
export const heightPxToPercentage = (value: number): number => {
  return percentageHeight * value;
};
export const isEmpty = (value: any) => {
  return (
    value === undefined ||
    value === 'null' ||
    value === null ||
    value === 'undefined' ||
    value === ''
  );
};
