import {FC} from 'react';
import {View} from 'react-native';
import {ItemMenuComponent} from '@src/component/item.menu.component';
import {
  FlashSaleIcon,
  ProductsIcon,
  TimeSale,
  VoucherIcon,
} from '@src/assets/icons';
import { Colors } from "@src/core/Colors";
interface ListItemMenu {
  onFastSalePress: () => void;
  onProductPress: () => void;
  onTimageSale: () => void;
  onVoucher: () => void;
}
export const ListItemMenu: FC<ListItemMenu> = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <ItemMenuComponent
        imageSource={FlashSaleIcon}
        title={'FlashSale'}
        onPress={props.onFastSalePress}
      />
      <ItemMenuComponent
        imageSource={VoucherIcon}
        title={'Vouche Giảm Giá'}
        onPress={props.onVoucher}
      />
      <ItemMenuComponent
        imageSource={ProductsIcon}
        title={'Sản phẩm'}
        onPress={props.onProductPress}
      />
      <ItemMenuComponent
        imageSource={TimeSale}
        title={'Khung Giờ Săn Sale'}
        onPress={props.onTimageSale}
      />
    </View>
  );
};
