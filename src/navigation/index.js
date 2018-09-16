import {
  Animated,
  Easing
} from  "react-native";

import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import AuthLoading from "../features/authentication/authLoading/containers";
import SignIn from "../features/authentication/signin/containers";
import Dashboard from "../features/dashboard/containers";
import Transfer from "../features/transfer/containers";
import TermCondition from "../features/term_condition/containers";

import SideMenu from "./side_menu/";
import LoadingScreen from "./loadingScreen";
import * as ScreenNames from "./screen_names";

// Authentication flow - Stack navigation
const AuthStack = createStackNavigator({
  // [ScreenNames.TERM_CONDITION]: TermCondition,
  [ScreenNames.SIGN_IN]: SignIn
});

// Dashboard flow
const DashboardStack = createStackNavigator(
  {
    [ScreenNames.DASHBOARD]: Dashboard,
    [ScreenNames.TRANSFER]: Transfer
  },
  {
    initialRouteName: ScreenNames.DASHBOARD
  }
);

// Acount flow
const AccountStack = createStackNavigator(
  {
    [ScreenNames.DASHBOARD]: Dashboard
  },
  {
    initialRouteName: ScreenNames.DASHBOARD
  }
);

// Transfer flow
const TransferStack = createStackNavigator(
  {
    [ScreenNames.DASHBOARD]: Dashboard
  },
  {
    initialRouteName: ScreenNames.DASHBOARD
  }
);

// Setting flow
const SettingStack = createStackNavigator(
  {
    [ScreenNames.DASHBOARD]: Dashboard
  },
  {
    initialRouteName: ScreenNames.DASHBOARD
  }
);

// Main flow for logged user - Tab navigation
const InternalStack = createBottomTabNavigator(
  {
    [ScreenNames.DASHBOARD]: Dashboard,
    [ScreenNames.TRANSFER]: DashboardStack
  },
  {
    animationEnabled: true
  }
);

const Drawer = createDrawerNavigator(
  {
    Stack: { screen: DashboardStack },
    Tabs: { screen: InternalStack }
  },
  {
    // contentComponent: SideMenu,
    drawerWidth: 250
  }
);

const RootStack = createStackNavigator(
  {
    Auth: {
      screen: AuthStack
    },
    Internal: {
      screen: InternalStack
    },
    LoadingScreen: {
      screen: LoadingScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
      }
    })
  }
);

const AppNavigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    RootStack: RootStack,
    App: Drawer,
    AuthStack: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default AppNavigation;
