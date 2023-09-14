import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import Header from './Header';
import GameListItem from './GameListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  gameListItem: {
    marginBottom: 10,
  },
});

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await axios.get('https://www.freetogame.com/api/games');
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGames();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Jogos gratuitos" />
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.gameListItem}>
            <GameListItem game={item} />
          </View>
        )}
      />
    </View>
  );
}
