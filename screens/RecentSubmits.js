import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class RecentSubmits extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>RecentSubmits</Text>
      </View>
    );
  }
}

export default RecentSubmits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
