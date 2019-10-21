import React from 'react';
import { Header, Title, Left, Button, Icon, Body, Right } from 'native-base';
import { withNavigation } from 'react-navigation';
import { Alert } from "react-native";

class MyHeader extends React.Component {

  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => {this.props.navigation.toggleDrawer()}}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        {
          this.props.title == 'Onyx' &&
          (
            <Right>
              <Button onPress={() => this.props.goBack()}>
                <Icon name="md-arrow-dropleft" />
              </Button>
              <Button onPress={() => this.props.goReload()}>
                <Icon name="md-refresh" />
              </Button>
              <Button onPress={() => this.props.goForward()}>
                <Icon name="md-arrow-dropright" />
              </Button>
            </Right>
          )
        }
        
      </Header>
    )
  }
}

export default withNavigation(MyHeader);