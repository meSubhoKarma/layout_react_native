import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class FollowToday extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FollowToday</Text>
      </View>
    );
  }
}

export default FollowToday;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
