import React from "react";
import {
  Container,
  Content,
} from "native-base";
import StatusBar from './StatusBar';
import Header from './Header';
import { purple } from '../utils/colors';

const MyContainer = ({ children, title }) => (
  <Container>
    <StatusBar backgroundColor={purple} barStyle='light-content' />
      {children}
  </Container>
);

export default MyContainer;