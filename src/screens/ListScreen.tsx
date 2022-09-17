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

  const renderItemFun = ({item}: any) => {
    return <Text style={styles.itemText}>{item.name}</Text>;
  };

  return (
    <FlatList
      horizontal={true}
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
    marginVertical: 50,
    marginLeft: 10,
    fontSize: 30,
  },
});
