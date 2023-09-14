import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  loadingText: {
    color: '#ffffff',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 20,
  },
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
    marginRight: 20,
    borderColor: 'black',
    borderWidth: 2,
  },
  name: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const ExtraScreen = ({ navigation }) => {
  const [digimons, setDigimons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDigimons = async () => {
      try {
        const response = await axios.get('https://www.digi-api.com/api/v1/digimon');
        const digimonData = response.data.content;
        setDigimons(digimonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchDigimons();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loadingText}>Carregando</Text>
      ) : (
        <FlatList
          data={digimons}
          renderItem={({ item }) => (
              <View style={styles.listItemContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.name}>Nome: </Text>
                <Text style={styles.name}>{item.name}</Text>
              </View>
          )}
        />
      )}
    </View>
  );
};

export default ExtraScreen;
