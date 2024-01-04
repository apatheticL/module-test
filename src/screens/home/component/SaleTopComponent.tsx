import {ProductInfoModel} from '@src/core/model/product-model';
import React, {FC} from 'react';
import { FlashSaleProduct, SaleProduct } from "@src/core/data";
import {HorizontalListComponent} from '@src/component/HorizontalListComponent';
import {StyleSheet, Text, View} from 'react-native';
import { ShieldIcon } from "@src/assets/icons";
import {pxToPercentage} from '@src/core/libs/utils';
import {textStyle} from '@src/component/text-style';
import {Colors} from '@src/core/Colors';
import {getCurrentTime} from '@src/core/libs/formatter';

interface FlashSaleTopProps {
  onShowAll: () => void;
  onItemPress: (item: ProductInfoModel) => void;
}
export const SaleTopComponent: FC<FlashSaleTopProps> = props => {
  const componentLeft = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Text style={styles.txtTitle}>3 Món Tu </Text>
        <Text style={styles.txtTitlePrice}>33K</Text>
        <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: pxToPercentage(8)}}>
          {ShieldIcon(styles.icon)}
        </View>
      </View>
    );
  };
  const componentRight = () => {
    return (
      <Text
        style={{
          textAlign: 'right',
          ...textStyle.sfProTextRegular,
          color: Colors['app-txt-color-6'],
        }}>
        Mien phi ship 100%
      </Text>
    );
  };
  return (
    <HorizontalListComponent
      list={SaleProduct}
      onItemPress={props.onItemPress}
      componentHeaderLeft={componentLeft}
      componentHeaderRight={componentRight}
      onComponentRightPress={props.onShowAll}
    />
  );
};
const styles = StyleSheet.create({
  icon: {
    width: pxToPercentage(20),
    height: pxToPercentage(20),
  },
  txtTitle: {
    ...textStyle.sfProTextSemiBold,
    fontSize: pxToPercentage(18),
    color: Colors['app-txt-color-7'],
  },
  txtTitlePrice: {
    ...textStyle.sfProTextSemiBold,
    fontSize: pxToPercentage(18),
    color: Colors['app-txt-color-3'],
  },
  styleTitle: {
    fontSize: pxToPercentage(14),
    ...textStyle.sfProTextRegular,
    color: Colors['app-txt-auth-color-2'],
  },
});
