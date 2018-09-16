import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./styles";
import { NavigationActions } from "react-navigation";
import { Button, Text, View, ActivityIndicator } from "react-native";
import { StackNavigator } from "react-navigation";

class LoadingScreen extends Component {
  render() {
    if (!this.state.isLoading) {
      this.props.navigation.goBack();
    } else {
      return (
        <View style={[styles.overlay, { height: 360}]}>
          <ActivityIndicator size="small" color="#00ff00" />
          <Text style={{ fontSize: 25 }}>Loading...</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
        </View>
      );
    }
  }
}

LoadingScreen.propTypes = {
  navigation: PropTypes.object
};

export default LoadingScreen;
