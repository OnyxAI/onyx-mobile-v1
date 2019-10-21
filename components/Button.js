import React from 'react';
import { Button, Text } from 'native-base';

export default MyButton = ({ children, action }) => (
  <Button
    rounded
    primary
    style={{ marginTop: 10 }}
    onPress={action}
  >
    <Text>{children}</Text>
  </Button>
);