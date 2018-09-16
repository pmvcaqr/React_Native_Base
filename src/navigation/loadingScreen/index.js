import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./styles";
import { NavigationActions } from "react-navigation";
import { Button, Text, View, ActivityIndicator } from "react-native";
import { StackNavigator } from "react-navigation";

class LoadingScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="small" color="#00ff00" />
        <Text style={{ fontSize: 25 }}>Loading...</Text>
      </View>
    );
  }
}

LoadingScreen.propTypes = {
  navigation: PropTypes.object
};

export default LoadingScreen;
