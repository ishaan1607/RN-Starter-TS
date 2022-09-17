import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Ishaan', age: 23},
    {name: 'Satvik', age: 23},
    {name: 'Sargam', age: 23},
    {name: 'Sidhi', age: 24},
    {name: 'Vishant', age: 23},
    {name: 'Maddy', age: 23},
    {name: 'JJ', age: 22},
    {name: 'Anjali', age: 21},
    {name: 'Agrim', age: 17},
    {name: 'Ayushi', age: 23},
  ];

  const renderItemFun = ({item}: any) => {
    return (
      <Text style={styles.itemText}>
        {item.name} - Age {item.age}
      </Text>
    );
  };

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderItemFun}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  itemText: {
    marginVertical: 20,
    marginLeft: 10,
    fontSize: 30,
  },
});
