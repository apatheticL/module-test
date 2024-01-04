import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabBarHome from '../screens/TabBarHome';

type TopNavigationParam = {
  Tab: undefined;
  // productForYou: undefined,
  // lastMonth: undefined,
  // freeShip: undefined,
  // coin: undefined,
};

const Tab = createNativeStackNavigator<TopNavigationParam>();
const TopNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={'Tab'} component={TabBarHome} />
    </Tab.Navigator>
  );
};
export default TopNavigation;
