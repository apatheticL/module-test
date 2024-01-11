import React, {useState} from 'react';
import ProductForYouScreen from './ProductForYouScreen';
import SaleProductLastMonth from './SaleProductLastMonth';
import ProductFreeShipScreen from './ProductFreeShipScreen';
import ProductCoinScreen from './ProductCoinScreen';
import {Tabs} from 'react-native-collapsible-tab-view';
interface TabBarHome {
  header: () => any;
}
const HEADER_HEIGHT = 600;

const TabBarHome = (props: TabBarHome) => {

  return (
    <Tabs.Container
      renderHeader={props.header}
      headerHeight={HEADER_HEIGHT}
      lazy={true}
    >
      <Tabs.Tab name={'Product For You'} key={'productForYou'}>
        <ProductForYouScreen />
      </Tabs.Tab>
      <Tabs.Tab name={'Last Month'} key={'lastMonth'}>
        <SaleProductLastMonth />
      </Tabs.Tab>
      <Tabs.Tab name={'Free Ship'} key={'freeShip'}>
        <ProductFreeShipScreen />
      </Tabs.Tab>
      <Tabs.Tab name={'Coin'} key={'coin'}>
        <ProductCoinScreen />
      </Tabs.Tab>
    </Tabs.Container>
  );
};

export default TabBarHome;
