import React from "react";
import {WebView, Alert} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Container from '../../components/Container';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-community/async-storage'
import Button from '../../components/Button';
import { Text, Content } from 'native-base';

export default class HomeScreen extends React.Component {
  state = {
    url: "https://onyxlabs.fr"
  }
  
  async componentWillMount(){
    this.refresh()
  }

  async componentWillReceiveProps(){
    this.refresh()
  }

  refresh = () => {
    AsyncStorage.getItem('onyx_url').then(value =>
      this.setState({ url: value })
    );
  }

  goBack = () => {
    this.refs["ONYX"].goBack();
  };

  goForward = () => {
    this.refs["ONYX"].goForward();
  };

  goReload = () => {
    this.refs["ONYX"].reload();
  };

  render() {
    return (

            <Container>
            <NavigationEvents
              onWillFocus={() => this.refresh()}
            />
              <Header title="Onyx" goBack={() => this.goBack()} goForward={() => this.goForward()} goReload={() => this.goReload()}/>
              <WebView
                ref={"ONYX"}
                automaticallyAdjustContentInsets={false}
                source={{uri: this.state.url}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
              />
            </Container>
        
      
    );
  }
}