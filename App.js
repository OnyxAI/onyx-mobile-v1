import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import MainRouter from './src/MainRouter';

export default class App extends React.Component {

  state = {
    ready: false
  }

  async componentWillMount() {

    this.setState({ ready: true });
  }

  render() {
    if (!this.state.ready) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    };

    return (
      <MainRouter />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});