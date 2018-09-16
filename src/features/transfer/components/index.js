import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

class Transfer extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Transfer screen</Text>
      </View>
    );
  }
}

export default Transfer;
