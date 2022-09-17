import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ExerciseScreen = () => {
  const greetingMessage: string = 'Getting started with React-Native!';
  console.log(
    '🚀 ~ file: JsxExercise.tsx ~ line 6 ~ ExerciseScreen ~ greetingMessage',
    greetingMessage,
  );

  const name: string = 'Ishaan';
  console.log(
    '🚀 ~ file: JsxExercise.tsx ~ line 12 ~ ExerciseScreen ~ name',
    name,
  );

  return (
    <View>
      <Text style={styles.text1}>{greetingMessage}</Text>
      <Text style={styles.text2}>My Name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 45,
  },
  text2: {
    fontSize: 20,
  },
});

export default ExerciseScreen;
