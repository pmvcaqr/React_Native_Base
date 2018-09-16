import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import styles from "./styles";

class TermCondition extends Component {
  constructor(props) {
    super(props);
  }

  showLoading = () => {
    this.props.navigation.navigate('LoadingScreen');
  }

  acceptTerm = () => {
    this.props.navigation.navigate('LoadingScreen');
    this.props.acceptTerm();
  }

  render() {
    return (
      <View style={styles}>
        <Text>This is terms and conditions</Text>
        <Button onPress={this.acceptTerm} title="Accept Terms & Conditions" />
        <Button onPress={this.showLoading} title="Deny Terms & Conditions" />
      </View>
    );
  }
}

export default TermCondition;