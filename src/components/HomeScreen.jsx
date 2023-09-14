import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
    marginVertical: 5,
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 50,
    borderColor: 'black',
    borderWidth: 2
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  level: {
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: '#0328fc',
    padding: 15,
    borderRadius: 2,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);

  const fetchApiData = async () => {
    try {
      const { data } = await axios.get('https://digimon-api.vercel.app/api/digimon');
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  const handleItemPress = (item) => {
    navigation.navigate('ItemDetail', { item });
  };

  const handleExtraScreenPress = () => {
    navigation.navigate('ExtraScreen');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.listItemContainer}>
        <Image source={{ uri: item.img }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.level}>{item.level}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
       <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleExtraScreenPress}>
        <Text style={styles.buttonText}>Ver Digimons mais recomendados</Text>
      </TouchableOpacity>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default HomeScreen;
