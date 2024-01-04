import {ProductInfoModel} from '@src/core/model/product-model';
import React, {FC} from 'react';
import {FlashSaleProduct} from '@src/core/data';
import {HorizontalListComponent} from '@src/component/HorizontalListComponent';
import {StyleSheet, Text, View} from 'react-native';
import {LightningIcon} from '@src/assets/icons';
import {pxToPercentage} from '@src/core/libs/utils';
import {textStyle} from '@src/component/text-style';
import {Colors} from '@src/core/Colors';
import {getCurrentTime} from '@src/core/libs/formatter';

interface FlashSaleTopProps {
  onShowAll: () => void;
  onItemPress: (item: ProductInfoModel) => void;
}
export const FlashSaleTopComponent: FC<FlashSaleTopProps> = props => {
  const componentLeft = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Text style={styles.txtTitle}>Fla</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {LightningIcon(styles.icon)}
        </View>
        <Text style={styles.txtTitle}>h Sale</Text>
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
        {`${getCurrentTime()} >`}
      </Text>
    );
  };
  return (
    <HorizontalListComponent
      list={FlashSaleProduct}
      onItemPress={props.onItemPress}
      componentHeaderLeft={componentLeft}
      componentHeaderRight={componentRight}
      onComponentRightPress={props.onShowAll}
    />
  );
};
const styles = StyleSheet.create({
  icon: {
    width: pxToPercentage(10),
    height: pxToPercentage(10),
  },
  txtTitle: {
    ...textStyle.sfProTextSemiBold,
    fontSize: pxToPercentage(18),
    color: Colors['app-txt-color-7'],
  },
  styleTitle: {
    fontSize: pxToPercentage(14),
    ...textStyle.sfProTextRegular,
    color: Colors['app-txt-auth-color-2'],
  },
});
