import { View, ActivityIndicator } from "react-native";
import React, { Component } from "react";
import styles from "./styles";

// const Loader = props => {
//   const { loading, ...attributes } = props;

//   return <Modal visible={loading} />;
// };

const LoadingOverlay = props => {
  const { hide, children } = props;
  if (hide) {
    return null;
  }
  return (
    <View {...this.props} style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
      <ActivityIndicator size="small" color="#00ff00" />
    </View>
  );
};

export default LoadingOverlay;
