import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ReactNativeLanguages from "react-native-languages";
import { translate } from "react-i18next";
import { Provider } from "react-redux";
import Layout from "./components/layout/index";
import LoadingOverlay from "./components/loadingOverlay/index";
import store from "./configureStore";

import { NavigationService } from "./navigation/navigationService";
import AppNavigation from "./navigation/index";
import { TERM_CONDITION } from "./navigation/screen_names";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

// Wrapping a stack with translation hoc asserts we get new render on language change
// the hoc is set to only trigger rerender on languageChanged
const WrappedStack = ({ t }) => {
  return <AppNavigation screenProps={{ t }} ref={r => NavigationService.setTopLevelNavigator(r)}/>;
};

const ReloadAppOnLanguageChange = translate("common", {
  bindI18n: "languageChanged",
  bindStore: false
})(WrappedStack);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldOverlay: false
    };
  }

  componentWillMount() {
    ReactNativeLanguages.addEventListener("change", this._onLanguagesChange);
  }

  componentWillUnmount() {
    ReactNativeLanguages.removeEventListener("change", this._onLanguagesChange);
  }

  _onLanguagesChange = ({ language, languages }) => {
    i18n.changeLanguage(language);
  };

  render() {
    return (
      <Provider store={store}>
        <ReloadAppOnLanguageChange />
      </Provider>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     acceptTerm: () => dispatch(acceptTermCondition()),
//     denyTerm: () => dispatch(denyTermCondition())
//   }
// };

// const mapStateToProps = state => ({
//   isAccepted: state.termConditionReducers.isAccepted
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TermCondition);

// const mapStateToProps = () => ({});
// const mapDispatchToProps = dispatch => bindActionCreators(ui, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(App);