import React, { Component } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";

import RootTabs from "../navigation/RootTabs";

export default class TwitterScreen extends Component {
  static navigationOptions = {
    　header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <RootTabs />;
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
