import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View, Text, Pressable, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import ProductCoinScreen from '@src/screens/ProductCoinScreen';
import ProductFreeShipScreen from '@src/screens/ProductFreeShipScreen';
import ProductYouScreen from '@src/screens/ProductYouScreen';
import {Colors} from '@src/core/Colors';
import { pxToPercentage } from "@src/core/libs/utils";
import { textStyle } from "@src/component/text-style";
import SaleProductLastMonth from "@src/screens/SaleProductLastMonth";

const TAB_WIDTH = 150;
const TABS = [
  {
    key: 'product',
    name: 'Product for You',
  },
  {
    key: 'product1',
    name: 'Sale For Month',
  },
  {
    key: 'product2',
    name: 'Free Ship',
  },
];

export const Example = () => {
  const offset = useSharedValue(-TAB_WIDTH);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));
  const ref = React.useRef(null);

  const [index, setIndex] = React.useState(0);
  const handlePress = tab => {
    setIndex(TABS.indexOf(tab));
    console.log(TABS.indexOf(tab), 'TABS.indexOf(tab)');
    const newOffset = (() => {
      switch (tab) {
        case 'product':
          return -TAB_WIDTH;
        case 'product1':
          return 0;
        case 'product2':
          return TAB_WIDTH;
        // case 'product3':
        //   return 2 * TAB_WIDTH;
        default:
          return -TAB_WIDTH;
      }
    })();

    offset.value = withTiming(newOffset);
  };
  const {width, height} = Dimensions.get('screen');
  const render = (item: string) => {
    switch (item) {
      case 'product1': {
        return <SaleProductLastMonth />;
      }
      case 'product2': {
        return <ProductFreeShipScreen />;
      }
      // case 'product3': {
      //   return <SaleProductLastMonth />;
      // }
      default: {
        return <ProductYouScreen />;
      }
    }
  };
  // get index item in flash list to scroll
  // https://stackoverflow.com/questions/54131709/how-to-get-current-index-of-flatlist-in-react-native

  useEffect(() => {
    ref.current?.scrollToIndex({
      index: index,
      animated: false,
      viewPosition: 0.4, // percent from the viewport starting from left handside
    });
  }, [index]);
  const onViewableItemsChanged = useCallback(({viewableItems, changed}) => {
    console.log('Visible items are', viewableItems);
    console.log('Changed in this iteration', changed);
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      const newOffset = (() => {
        switch (index) {
          case 0:
            return -TAB_WIDTH;
          case 1:
            return 0;
          case 2:
            return TAB_WIDTH;

          default:
            return -TAB_WIDTH;
        }
      })();
      offset.value = withTiming(newOffset);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {TABS.map((tab, i) => (
          <Pressable
            key={tab.key}
            style={
              i !== TABS.length - 1 ? [styles.tab, styles.divider] : styles.tab
            }
            onPress={() => handlePress(tab.key)}>
            <Text style={styles.tabLabel}>{tab.name}</Text>
          </Pressable>
        ))}
      </View>
      <Animated.View style={[styles.animatedBorder, animatedStyles]} />
      <Animated.FlatList
        ref={ref}
        initialScrollIndex={index}
        onViewableItemsChanged={onViewableItemsChanged}
        onScroll={event => {
          // log event here
          console.log(event, 'event.nativeEvent');
          //handle on scroll here
          // what is onScroll event?
          // https://reactnative.dev/docs/scrollview#onscroll
          console.log(
            event.nativeEvent.contentOffset.x,
            'event.nativeEvent.contentOffset.x',
          );
        }}
        pagingEnabled={true} // make item in 1 page
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={TABS}
        bounces={false}
        renderItem={({item}) => {
          return (
            <View style={{width, height}}>
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  {backgroundColor: 'white'},
                ]}
              />
              {render(item.key)}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: Colors['background-color-2'],
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '33%',
  },
  tabLabel: {
    fontSize: pxToPercentage(16),
    textAlign: 'center',
    ...textStyle.sfProTextBold,
  },
  divider: {
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  animatedBorder: {
    height: 8,
    width: 80,
    backgroundColor: 'tomato',
    borderRadius: 20,
    marginHorizontal: pxToPercentage(30),
  },
});
