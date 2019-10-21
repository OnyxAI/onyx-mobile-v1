import React from "react";
import Container from "../../components/Container";
import Header from '../../components/Header';
import Button from "../../components/Button";
import { Form, Item, Input } from "native-base";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-community/async-storage'

export default class SettingsScreen extends React.Component {
  state = {
    urlInput: ""
  };

  async componentWillMount(){
    AsyncStorage.getItem('onyx_url').then(value =>
      this.setState({ urlInput: value })
    );
  }

  url = () => {
    AsyncStorage.setItem('onyx_url', this.state.urlInput);
  };

  render() {
    return (
      <Container title={"Settings"}>
        <Header title="Settings"/>
        <Form>
          <Item>
            <Input
              placeholder="Onyx URL"
              value={this.state.urlInput}
              name="urlInput"
              onChangeText={urlInput => this.setState({ urlInput })}
            />
          </Item>
          <Button action={this.url}>Change</Button>
        </Form>
      </Container>
    );
  }
}
