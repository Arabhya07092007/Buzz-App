import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Header } from "react-native-elements";

import FacebookScreen from "./screens/Facebook";
import Instascreen from "./screens/Insta";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header
          backgroundColor="skyblue"
          elevated={true}
          centerComponent={{
            text: "The social App",
            style: {
              color: "#1C2E4A",
              fontSize: 25,
              justifyContent: "center",
              fontWeight: "bold",
            },
          }}
        />
        <AppContainer />
      </>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: FacebookScreen },
  Instagram: { screen: Instascreen },
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
