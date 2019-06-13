import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import CreateNew from "./screens/CreateNew";
import FollowToday from "./screens/FollowToday";
import SubmitAsset from "./screens/SubmitAsset";
import Inbox from "./screens/Inbox";
import RecentSubmits from "./screens/RecentSubmits";

const TabNavigator = createBottomTabNavigator({
  CreateNew: {
    screen: CreateNew
  },
  FollowToday: {
    screen: FollowToday
  },
  SubmitAsset: {
    screen: SubmitAsset
  },
  Inbox: {
    screen: Inbox
  },
  RecentSubmits: {
    screen: RecentSubmits
  }
});

export default createAppContainer(TabNavigator);
