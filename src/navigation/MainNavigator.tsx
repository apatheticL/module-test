import React, {useEffect} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import {ProductMarketPlaceContainer} from '@src/screens/products/ProductListScreen';
import {ConfigServiceAddress} from '@src/core/model/config-service-url';
import {AppConfigService} from '@src/core/app-config';
import {Federated} from '@callstack/repack/client';
import {productReducer} from '@src/store/product/reducer';
import HomeScreen from '@src/screens/home/HomeScreen';

export type MainStackParamList = {
  Home: undefined;
  // Gallery: undefined;
  Tab: undefined;
  productMarketPlaceContainer: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

export interface ComponentProps {
  configService: ConfigServiceAddress;
}
const MainNavigator = (props: ComponentProps) => {
  AppConfigService.setAppConfig(props.configService);
  useEffect(() => {
    addDownReducer();
  }, []);
  const addDownReducer = async () => {
    const {addNewReducer} = await Federated.importModule(
      'state_management',
      './store',
    );
    addNewReducer('products', productReducer);
  };
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="Home" component={HomeScreen} />
      <Main.Screen
        name="productMarketPlaceContainer"
        component={ProductMarketPlaceContainer}
      />
    </Main.Navigator>
  );
};

export default MainNavigator;
