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
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {findRoute} from './src/config/routes';

import {Scene} from './src/components/scene';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerButton: {
    height: 64,
    paddingTop: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  contentBottomButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    padding: 20,
    borderTopColor: '#bbb',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  contentBottomButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

class NavigationHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        {(this.props.onPressLeftButton) ? (
          <TouchableOpacity style={styles.headerButton} onPress={this.props.onPressLeftButton}>
            {this.props.leftChild}
          </TouchableOpacity>
        ) : null}
        {(this.props.onPressRightButton) ? (
          <TouchableOpacity style={styles.headerButton} onPress={this.props.onPressRightButton}>
            {this.props.rightChild}
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

class DashboardContent extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Text>Dashboard</Text>
        <TouchableOpacity style={styles.contentBottomButton} onPress={() => this.props.navigator.push(findRoute('/task'))}>
          <Text style={styles.contentBottomButtonText}>ADD TASK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class LabelsContent extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Text>LabelList</Text>
        <TouchableOpacity style={styles.contentBottomButton} onPress={() => this.props.navigator.push(findRoute('/label'))}>
          <Text style={styles.contentBottomButtonText}>ADD LABEL</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default class HandleClient extends Component {
  renderScene(route, navigator) {
    switch(route.path) {
      case '/dashboard': {
        return (
          <Scene>
            <NavigationHeader
              leftChild={<Text>P</Text>}
              onPressLeftButton={() => navigator.push(findRoute('/profile'))}
              rightChild={<Text>L</Text>}
              onPressRightButton={() => navigator.push(findRoute('/labels'))}
            />
            <DashboardContent navigator={navigator} />
          </Scene>
        );
      }
      case '/labels': {
        return (
          <Scene>
            <NavigationHeader
              leftChild={<Text>B</Text>}
              onPressLeftButton={() => navigator.pop()}
            />
            <LabelsContent navigator={navigator} />
          </Scene>
        );
      }
      case '/profile': {
        return (
          <Scene>
            <NavigationHeader
              leftChild={<Text>B</Text>}
              onPressLeftButton={() => navigator.pop()}
            />
            <View style={styles.content}>
              <Text>{route.title}</Text>
            </View>
          </Scene>
        );
      }
      case '/label': {
        return (
          <Scene>
            <NavigationHeader
              leftChild={<Text>B</Text>}
              onPressLeftButton={() => navigator.pop()}
            />
            <View style={styles.content}>
              <Text>{route.title}</Text>
            </View>
          </Scene>
        );
      }
      case '/task': {
        return (
          <Scene>
            <NavigationHeader
              leftChild={<Text>B</Text>}
              onPressLeftButton={() => navigator.pop()}
            />
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
          configureScene={(route, routeStack) => {
            return route.configureScene || Navigator.SceneConfigs.PushFromRight;
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('HandleClient', () => HandleClient);
