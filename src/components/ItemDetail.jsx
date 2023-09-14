import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listItemContainer: {
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 20,
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  level: {
    fontSize: 25,
  },
});

const ItemDetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.listItemContainer}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.level}>{item.level}</Text>
      </View>
    </View>
  );
};

export default ItemDetailScreen;
