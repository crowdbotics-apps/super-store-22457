import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile170089Navigator from '../features/UserProfile170089/navigator';
import Settings170088Navigator from '../features/Settings170088/navigator';
import Settings170086Navigator from '../features/Settings170086/navigator';
import SignIn2170084Navigator from '../features/SignIn2170084/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile170089: { screen: UserProfile170089Navigator },
Settings170088: { screen: Settings170088Navigator },
Settings170086: { screen: Settings170086Navigator },
SignIn2170084: { screen: SignIn2170084Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
