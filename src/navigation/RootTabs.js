import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import TimelineNavigator from "./TimelineNavigator";
import PostTweetNavigator from "./PostTweetNavigator";

const RootTabs = createBottomTabNavigator({
  Timeline: {
    screen: TimelineNavigator,
    navigationOptions: {
      tabBarLabel: "GET",
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? "ios-list-box" : "ios-list-box-outline"}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Tweet: {
    screen: PostTweetNavigator,
    navigationOptions: {
      tabBarLabel: "POST",
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? "ios-create" : "ios-create-outline"}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  }
});

export default RootTabs;
