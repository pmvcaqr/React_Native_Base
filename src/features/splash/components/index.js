import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

class Splash extends Component {
  static navigationOptions = {
    header: null
  };

  handleButtonclick = () => {
    this.props.navigateToDashboard();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the splash screen!</Text>
        <Button
          onPress={this.handleButtonclick}
          title="Go to Dashboard"
        />
      </View>
    );
  }
}

export default Splash;
