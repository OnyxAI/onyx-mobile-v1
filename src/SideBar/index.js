import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from 'native-base';

export default class SideBar extends React.Component {
  render() {
    const routes = this.props.items.map(route => route.routeName);
    return (
      <Container> 
        <Content>
          <Image
            source={{
              uri:
                "https://i.ytimg.com/vi/TU6fpz7lbOA/maxresdefault.jpg"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 50,
              width: 50,
              position: "absolute",
              alignSelf: "center",
              top: 40
            }}
            source={{
              uri:
                "https://onyxlabs.fr/img/Logo_white_blue.png"
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}