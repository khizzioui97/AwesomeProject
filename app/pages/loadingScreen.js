import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

function LoadingScreen(props) {
  return <View style={styles.container}>
    <Text>test</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;