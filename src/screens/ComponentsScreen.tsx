import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>ComponentsScreen, is here.</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ComponentsScreen;
