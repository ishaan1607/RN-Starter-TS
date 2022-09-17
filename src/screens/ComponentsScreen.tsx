import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ComponentsScreen = () => {

  const greeting: string = 'Greeting Message!';
  return (
    <View>
      <Text style={styles.textStyle}>ComponentsScreen, is here.</Text>
      <Text>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ComponentsScreen;
