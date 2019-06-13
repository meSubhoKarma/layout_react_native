import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class SubmitAsset extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SubmitAsset</Text>
      </View>
    );
  }
}

export default SubmitAsset;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
