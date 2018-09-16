import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

class Dashboard extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Dashboard screen</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("Detail", { title: "Detail" })
          }
        >
          <Text>Click here to go detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Dashboard;
