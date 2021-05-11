import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigation from './authNavigation';
// import AppStack from './AppStack';
import SplashScreen from '../screens/splashscreen/splashscreen';
import Drawer from '../navigation/drawer/drawer'; 
import DrawerScreen from '../screens/myAccount/account';
import VendorStack from './bottomStacks/vedorStack';
import VendorTabs from './vedorTabs';

const SwitchNavigator = createSwitchNavigator(
  {
    SplashScreen:SplashScreen,
    Auth: AuthNavigation,
    Drawer: Drawer,
    VendorStack:VendorTabs
  },
  {
    initialRouteName: 'SplashScreen'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer