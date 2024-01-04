import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ProductForYouScreen from './ProductForYouScreen';
import SaleProductLastMonth from './SaleProductLastMonth';
import ProductFreeShipScreen from './ProductFreeShipScreen';
import ProductCoinScreen from './ProductCoinScreen';

const TabBarHome = () => {
  const layout = useWindowDimensions();
  const renderScene = SceneMap({
    productForYou: ProductForYouScreen,
    lastMonth: SaleProductLastMonth,
    freeShip: ProductFreeShipScreen,
    coin: ProductCoinScreen,
  });
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'productForYou', title: 'Product For You'},
    {key: 'lastMonth', title: 'Last Month'},
    {key: 'freeShip', title: 'Free Ship'},
    {key: 'coin', title: 'Coin'},
  ]);

  return (
    <TabView
      navigationState={{index: index, routes: routes}}
      renderScene={renderScene}
      onIndexChange={index => {
        console.log(index, 'index');
        setIndex(index);
      }}
      initialLayout={{width: layout.width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          getLabelText={({route: {title}}) => title}
          indicatorStyle={{backgroundColor: 'white'}}
          tabStyle={{backgroundColor: 'blue'}}
          onTabLongPress={({route}) => {
            console.log('log pewretewrsc', route.key);
            props.jumpTo(route.key);
          }}
          onTabPress={({route, preventDefault}) => {
            console.log('stert', route.key);
            props.jumpTo(route.key);
          }}
        />
      )}
    />
  );
};

export default TabBarHome;
