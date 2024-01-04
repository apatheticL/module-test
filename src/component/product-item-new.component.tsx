import {ProductInfoModel} from '../core/model/product-model';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {pxToPercentage} from '../core/libs/utils';
import {textStyle} from './text-style';
import {formatCurrency, getThumbnailImageURL} from '../core/libs/formatter';
import {defaultImage} from '../assets/images';
import {Colors} from '@src/core/Colors';

interface ProductItemProps {
  item: ProductInfoModel;
  onPressItem: () => void;
}

export const ProductItemNew: React.FunctionComponent<ProductItemProps> = ({
  item,
  onPressItem,
}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.cardContainerRow]}
        onPress={() => {
          onPressItem();
        }}>
        <View style={[styles.imageItemRow]}>
          <Image
            source={
              item.imageUrl
                ? {
                    uri: getThumbnailImageURL(item.imageUrl),
                  }
                : defaultImage.imageSource
            }
            style={styles.image}
          />
        </View>
        <View style={[styles.containerInfo]}>
          {/* <View style={[styles.containerTitle]}> */}
          <View>
            <Text
              style={[
                styles.textRegular,
                styles.fontSize12,
                {color: Colors['main-txt-color-4']},
              ]}
              numberOfLines={2}>
              {item.name.trim()}
            </Text>
            <Text
              style={[styles.textRegular, styles.fontSize12, styles.txtGray]}
              numberOfLines={1}>
              {item.organizationInfo.name}
            </Text>
          </View>
          <Text style={[styles.textRegular, styles.fontSize12, styles.txtBlue]}>
            <Text style={styles.txtRed}>
              {formatCurrency(item.unitPrice)}
              {item.currency}
            </Text>{' '}
            {item.unitPrice !== item.originalPrice && (
              <Text
                style={[
                  styles.textRegular,
                  styles.fontSize10,
                  styles.productPriceOrigin,
                  styles.opacity80,
                ]}>
                {formatCurrency(item.originalPrice)}
                {item.currency}
              </Text>
            )}
          </Text>
        </View>
        {/* </View> */}
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: Colors['background-color-9'],
  },
  scrollView: {
    overflow: Platform.OS === 'ios' ? 'visible' : 'scroll',
  },
  bgWhite: {
    backgroundColor: Colors['background-color-2'],
  },
  productPriceOrigin: {
    textDecorationLine: 'line-through',
    color: Colors['main-txt-color-4'],
    // marginBottom: pxToPercentage(2),
  },
  contentContainer: {
    // marginTop: pxToPercentage(9),
    backgroundColor: Colors['background-color-2'],
  },
  marginBot5: {
    marginBottom: pxToPercentage(5),
  },
  containerInfo: {
    flex: 1,
    marginLeft: pxToPercentage(12),
    justifyContent: 'space-between',
  },
  containerTitle: {
    minHeight: pxToPercentage(65),
  },
  opacity80: {
    opacity: 0.8,
  },
  txtGray: {
    color: Colors['app-txt-color-9'],
  },
  txtRed: {
    color: Colors['app-txt-color-10'],
  },
  containerTitleVer: {minHeight: pxToPercentage(50)},
  iconBack: {
    width: pxToPercentage(25),
    height: pxToPercentage(25),
  },
  row: {
    flexDirection: 'row',
  },
  fontSize10: {
    fontSize: pxToPercentage(11),
  },
  fontSize12: {
    fontSize: pxToPercentage(13.25),
  },
  fontSize14: {
    fontSize: pxToPercentage(15.5),
  },
  fontSize16: {
    fontSize: pxToPercentage(17.6),
  },
  fontSize15: {
    fontSize: pxToPercentage(15),
  },
  fontSize18: {
    fontSize: pxToPercentage(19.9),
  },
  padBot: {paddingBottom: pxToPercentage(12)},
  pad10: {
    paddingHorizontal: pxToPercentage(16),
    // paddingBottom: pxToPercentage(1000),
  },
  textSemiBold: {
    ...textStyle.sfProTextSemiBold,
    color: Colors['main-txt-color-4'],
  },
  txtBlue: {
    color: Colors['main-txt-color-5'],
  },
  textRegular: {
    ...textStyle.sfProTextRegular,
    color: Colors['main-txt-color-4'],
  },
  padHorz16: {
    paddingHorizontal: pxToPercentage(16),
  },
  padVert16: {
    paddingVertical: pxToPercentage(16),
  },
  opacity70: {
    opacity: 0.7,
  },
  viewNodata: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNodata: {
    marginTop: pxToPercentage(10),
    color: Colors['app-txt-color-7'],
  },
  txt: {
    fontSize: pxToPercentage(16),
    ...textStyle.sfProTextBold,
    textAlign: 'center',
    lineHeight: pxToPercentage(24),
  },
  cardContainer: {
    marginRight: pxToPercentage(16),
    flex: 1,
    width: pxToPercentage(150),
  },
  cardContainerRow: {
    // marginRight: pxToPercentage(16),
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: pxToPercentage(16),
    // width: pxToPercentage(150),
  },
  footerContainer: {
    flexDirection: 'row',
    // marginTop: pxToPercentage(8),
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  loading: {
    width: '100%',
    alignItems: 'center',
    marginTop: pxToPercentage(12),
  },
  hr10: {
    backgroundColor: Colors['background-color-9'],
    borderBottomColor: Colors['background-color-9'],
    height: pxToPercentage(9),
    marginVertical: pxToPercentage(0),
  },
  viewIcon: {
    backgroundColor: 'red',
    width: pxToPercentage(15),
    height: pxToPercentage(15),
    borderRadius: pxToPercentage(20),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: pxToPercentage(-3),
    top: pxToPercentage(-5),
  },
  caseView: {
    width: '100%',
    // marginTop: pxToPercentage(5),
    marginBottom: pxToPercentage(20),
  },
  imageItem: {
    width: pxToPercentage(150),
    height: pxToPercentage(150),
    marginBottom: pxToPercentage(13),
  },
  imageItemRow: {
    width: pxToPercentage(100),
    height: pxToPercentage(100),
  },
  image: {
    flex: 1,
    borderRadius: pxToPercentage(10),
    width: pxToPercentage(100),
    height: pxToPercentage(100),
  },
  miniIcon: {
    width: pxToPercentage(15),
    height: pxToPercentage(15),
    marginRight: pxToPercentage(5),
  },
  txtCount: {
    ...textStyle.sfProTextRegular,
    fontSize: pxToPercentage(10),
    color: Colors['background-color-main'],
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatIcon: {
    width: pxToPercentage(20),
    height: pxToPercentage(20),
  },
  viewBtnChat: {
    width: pxToPercentage(35.25),
    height: pxToPercentage(35.25),
    backgroundColor: Colors['background-color-9'],
    borderRadius: pxToPercentage(44),
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
