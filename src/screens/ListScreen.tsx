import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Ishaan'},
    {name: 'Satvik'},
    {name: 'Sargam'},
    {name: 'Sidhi'},
    {name: 'Vishant'},
    {name: 'Maddy'},
    {name: 'JJ'},
    {name: 'Anjali'},
    {name: 'Agrim'},
    {name: 'Ayushi'},
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({item}) => {
        return <Text style={styles.itemText}>{item.name}</Text>;
      }}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  itemText: {
    fontSize: 30,
  },
});
