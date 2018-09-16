import React, { Component } from "react";
import { View, ActivityIndicator, AsyncStorage, StatusBar } from "react-native";
import styles from "./styles";
import * as screenNames from "../../../../navigation/screen_names";

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    // this.getPreviousUser();
  }

  componentDidMount() {
    // this.props.getPreviousLogin();
    this.checkLoginInfo();
  }

  // Check if user already logged in before
  checkLoginInfo = async () => {
    const isTCAccepted = await AsyncStorage.getItem("TermConditionAccepted");

    console.log("TermConditionAccepted -- " + isTCAccepted);
    if (isTCAccepted) {
      this.props.navigation.navigate("AuthStack");
    } else {
      this.props.navigation.navigate("AuthStack");
    }

    // this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoading;
