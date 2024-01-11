import {ProductInfoModel} from '@src/core/model/product-model';
import {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {isEmpty, pxToPercentage} from '@src/core/libs/utils';
import {defaultImage} from '@src/assets/images';
import {textStyle} from '@src/component/text-style';
import {Colors} from '@src/core/Colors';

interface ItemTopProductComponentProps {
  onItemPress: (item: ProductInfoModel) => void;
  item: ProductInfoModel;
}

export const ItemProductComponent: FC<ItemTopProductComponentProps> = props => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={
          isEmpty(props.item.imageUrl)
            ? defaultImage.imageSource
            : {
                uri: props.item.imageUrl,
              }
        }
      />
      <Text style={styles.textName} numberOfLines={2} ellipsizeMode={'tail'}>
        {props.item.name}
      </Text>
      <Text style={styles.txtUnitPrice}>
        {props.item.unitPrice}
        <Text style={styles.txtCurrencyUnitPrice}> {props.item.currency}</Text>
      </Text>
      {!isEmpty(props.item.originalPrice) ? (
        <Text style={styles.txtOriginalPrice}>
          {props.item.originalPrice} {props.item.currency}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textName: {
    ...textStyle.sfProTextBold,
    fontSize: pxToPercentage(16),
    color: Colors['main-txt-color-4'],
    flex: 1,
  },
  image: {
    width: pxToPercentage(120),
    height: pxToPercentage(120),
    borderRadius: pxToPercentage(8),
  },
  view: {
    alignItems: 'flex-start',
    marginHorizontal: pxToPercentage(10),
    marginBottom: pxToPercentage(10),
    maxWidth: pxToPercentage(120),
  },
  txtUnitPrice: {
    ...textStyle.sfProTextBold,
    fontSize: pxToPercentage(16),
    color: Colors['vote-ignore-color'],
  },
  txtCurrencyUnitPrice: {
    ...textStyle.sfProTextBold,
    fontSize: pxToPercentage(12),
    color: Colors['vote-ignore-color'],
  },
  txtOriginalPrice: {
    ...textStyle.sfProTextRegular,
    fontSize: pxToPercentage(14),
    color: Colors['app-txt-color-6'],
    textDecorationLine: 'line-through',
    includeFontPadding: false,
  },
});
