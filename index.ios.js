/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ListView,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

import {findRoute} from './src/config/routes';

import {Scene} from './src/components/scene';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    height: 68,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default class HandleClient extends Component {
  renderScene(route, navigator) {
    switch(route.path) {
      case '/dashboard': {
        return (
          <Scene>
            <View style={styles.header}>
              <TouchableHighlight onPress={() => navigator.push(findRoute('/profile'))}>
                <Text>Profile</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => navigator.push(findRoute('/labels'))}>
                <Text>Labels</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.content}>
              <TouchableHighlight onPress={() => navigator.push(findRoute('/task'))}>
                <Text>Add Task</Text>
              </TouchableHighlight>
            </View>
          </Scene>
        );
      }
      case '/labels': {
        return (
          <Scene>
            <View style={styles.header}>
              <TouchableHighlight onPress={() => navigator.pop()}>
                <Text>Back</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.content}>
              <Text>{route.title}</Text>
              <TouchableHighlight onPress={() => navigator.push(findRoute('/label'))}>
                <Text>Add Label</Text>
              </TouchableHighlight>
            </View>
          </Scene>
        );
      }
      case '/profile': {
        return (
          <Scene>
            <View style={styles.header}>
              <TouchableHighlight onPress={() => navigator.pop()}>
                <Text>Back</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.content}>
              <Text>{route.title}</Text>
            </View>
          </Scene>
        );
      }
      case '/label': {
        return (
          <Scene>
            <View style={styles.header}>
              <TouchableHighlight onPress={() => navigator.pop()}>
                <Text>Back</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.content}>
              <Text>{route.title}</Text>
            </View>
          </Scene>
        );
      }
      case '/task': {
        return (
          <Scene>
            <View style={styles.header}>
              <TouchableHighlight onPress={() => navigator.pop()}>
                <Text>Back</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.content}>
              <Text>{route.title}</Text>
            </View>
          </Scene>
        );
      }
    }
  }
  render() {
    return (
      <View style={styles.screen}>
        <StatusBar barStyle="dark-content" />
        <Navigator
          initialRoute={findRoute('/dashboard')}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('HandleClient', () => HandleClient);
