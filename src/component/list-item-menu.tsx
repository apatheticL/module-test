import {FC} from 'react';
import {View} from 'react-native';
import {ItemMenuComponent} from '@src/component/item.menu.component';
import { ClinicIcon, FlashSaleIcon, ProductsIcon, ServiceIcon } from "@src/assets/icons";
import { pxToPercentage } from "@src/core/libs/utils";
interface ListItemMenu {
  onFastSalePress: () => void;
  onProductPress: () => void;
  onTimageSale: () => void;
  onVoucher: () => void;
}
export const ListItemMenu: FC<ListItemMenu> = props => {
  return (
    <View style={{flexDirection: 'row', height: pxToPercentage(150)}}>
      <ItemMenuComponent
        imageSource={FlashSaleIcon}
        title={'FlashSale'}
        onPress={props.onFastSalePress}
      />
      <ItemMenuComponent
        imageSource={ProductsIcon}
        title={''}
        onPress={props.onProductPress}
      />
      <ItemMenuComponent
        imageSource={ClinicIcon}
        title={'Khung Giờ Săn Sale'}
        onPress={props.onTimageSale}
      />
      <ItemMenuComponent
        imageSource={ServiceIcon}
        title={'Vouche Giảm Giá'}
        onPress={props.onVoucher}
      />
    </View>
  );
};
