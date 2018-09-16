import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
import i18n from '../../../../../locale/i18n';

class SignIn extends Component {
  static navigationOptions = {
    header: null
  };

  handleButtonclick = () => {
    // this.props.navigation.navigate("App");
    this.props.login();
  };

  changeLanguage = () => {
    i18n.changeLanguage('vi');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{i18n.t('LOGIN.WELCOME')}</Text>
        <Button onPress={this.handleButtonclick} title={i18n.t('LOGIN.LOGIN_BUTTON')} />
        <Button onPress={this.changeLanguage} title="Click to change locale" />
      </View>
    );
  }
}

export default SignIn;
