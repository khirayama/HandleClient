import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const style = StyleSheet.create({
  flex: 1,
});

export class Scene extends Component {
  render() {
    return (
      <View style={style}>{this.props.children}</View>
    );
  }
}

