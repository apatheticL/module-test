import {ProductInfoModel} from '@src/core/model/product-model';
import {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ItemTopProduct} from '@src/component/ItemTopProductComponent';
import {Colors} from '@src/core/Colors';
import { pxToPercentage } from "@src/core/libs/utils";

interface HorizontalListComponentProps {
  list: ProductInfoModel[];
  onItemPress: (item: ProductInfoModel) => void;
  componentHeaderLeft?: () => any;
  componentHeaderRight?: () => any;
  onComponentRightPress?: () => void;
}
export const HorizontalListComponent: FC<
  HorizontalListComponentProps
> = props => {
  return (
    <View style={{backgroundColor: Colors['background-color-2'], marginBottom: pxToPercentage(16)}}>
      <View style={{flexDirection:'row', marginHorizontal: pxToPercentage(16)}}>
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          {props.componentHeaderLeft ? props.componentHeaderLeft() : null}
        </View>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'flex-end'}}
          onPress={props.onComponentRightPress}>
          {props.componentHeaderRight ? props.componentHeaderRight() : null}
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        {props.list.slice(0, 3).map((item, index) => {
          return (
            <ItemTopProduct
              onItemPress={props.onItemPress}
              item={item}
              key={index}
            />
          );
        })}
      </View>
    </View>
  );
};
