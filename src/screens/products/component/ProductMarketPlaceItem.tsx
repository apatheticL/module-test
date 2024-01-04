import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProductInfoModel} from '@src/core/model/product-model';
import {isEmpty, pxToPercentage} from '@src/core/libs/utils';
import {formatCurrency, getThumbnailImageURL} from '@src/core/libs/formatter';
import {defaultImage, RemoteImage} from '@src/assets/images';
import {StarIcon} from '@src/assets/icons';
import {textStyle} from '@src/component/text-style';
import {Colors} from '@src/core/Colors';

interface ComponentProps {
  onPressProductItem: (item: ProductInfoModel) => void;
  item: ProductInfoModel;
  index: number;
}
export const ProductMarketPlaceItem: React.FunctionComponent<
  ComponentProps
> = props => {
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  const getAvatarOrgImage = () => {
    if (!isEmpty(props.item.organizationInfo.avatarUrl)) {
      return new RemoteImage(`${props.item.organizationInfo.avatarUrl}`)
        .imageSource;
    }
    return {uri: ''};
  };
  const renderProviderImages = (): React.ReactElement => {
    return (
      <ImageBackground
        style={[styles.viewImageProvider]}
        resizeMode={'cover'}
        source={getAvatarOrgImage()}
        onLoadStart={() => setImageLoading(true)}
        onLoadEnd={() => setImageLoading(false)}>
        {imageLoading && (
          <ActivityIndicator
            size={'small'}
            color={Colors['activity-indicator-color']}
            style={styles.loading}
          />
        )}
      </ImageBackground>
    );
  };
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[
          styles.cardContainer,
          props.index === 0 ? {marginLeft: pxToPercentage(16)} : {},
        ]}
        onPress={() => {
          props.onPressProductItem(props.item);
        }}>
        <View style={[styles.imageItem]}>
          <Image
            key={props.index}
            source={
              props.item.imageUrl
                ? {
                    uri: getThumbnailImageURL(props.item.imageUrl),
                  }
                : defaultImage.imageSource
            }
            style={styles.image}
          />
          {!isEmpty(props.item.organizationInfo?.avatarUrl) &&
            renderProviderImages()}
        </View>
        <View>
          <Text
            style={[styles.textRegular, styles.fontSize12, styles.marginBot5]}
            numberOfLines={2}>
            {props.item.name.trim()}
          </Text>
          <View style={styles.groupView}>
            <View style={styles.viewPrice}>
              <Text
                style={[styles.textRegular, styles.fontSize12, styles.txtRed]}>
                {formatCurrency(props.item.unitPrice)}
                {props.item.currency}{' '}
              </Text>
              {props.item.unitPrice !== props.item.originalPrice && (
                <Text
                  style={[
                    styles.textRegular,
                    styles.fontSize10,
                    styles.productPriceOrigin,
                    styles.opacity70,
                  ]}>
                  {formatCurrency(props.item.originalPrice)}
                  {props.item.currency}
                </Text>
              )}
            </View>
          </View>
        </View>
        <View style={[styles.footerContainer]}>
          {props.item.rated && (
            <Text style={[styles.textSemiBold, styles.fontSize14]}>
              {StarIcon(styles.miniIcon)}
              {props.item?.rated}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  txtRed: {
    color: Colors['app-txt-color-10'],
  },
  viewImageProvider: {
    width: pxToPercentage(53),
    height: pxToPercentage(53),
    borderRadius: pxToPercentage(53),
    overflow: 'hidden',
    position: 'absolute',
    bottom: pxToPercentage(-14),
    left: pxToPercentage(14),
    zIndex: 99,
  },
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: Colors['background-color-9'],
  },
  scrollView: {
    overflow: Platform.OS === 'ios' ? 'visible' : 'scroll',
  },
  containerSearch: {
    borderRadius: pxToPercentage(25),
    backgroundColor: Colors['background-color-2'],
    borderWidth: pxToPercentage(1),
    borderColor: Colors['border-color-01'],
  },
  bgWhite: {
    backgroundColor: Colors['background-color-2'],
  },
  productPriceOrigin: {
    textDecorationLine: 'line-through',
    lineHeight: pxToPercentage(12),
    // marginBottom: pxToPercentage(2),
  },
  contentContainer: {
    // marginTop: pxToPercentage(9),
    backgroundColor: Colors['background-color-2'],
  },
  marginBot5: {
    flexGrow: 1,
    marginBottom: pxToPercentage(8),
    lineHeight: pxToPercentage(17.6),
    // marginRight: pxToPercentage(4),
  },
  containerInfo: {flex: 1, marginLeft: pxToPercentage(12)},
  containerTitle: {minHeight: pxToPercentage(65)},
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
    // flex: 1,
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
    marginTop: pxToPercentage(8),
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
    width: pxToPercentage(150),
    height: pxToPercentage(150),
    borderRadius: pxToPercentage(10),
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewPrice: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
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
