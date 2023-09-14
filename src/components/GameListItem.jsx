import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginBottom: 10,
      borderRadius: 10,
    },
    redBackground: {
      backgroundColor: '',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
    },
    label: {
      fontWeight: 'bold',
    },
    info: {
      fontSize: 14,
    },
  });
  

const GameListItem = ({ game }) => {
  return (
    <View style={[styles.container, styles.redBackground]}>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.short_description}</Text>
      <Text style={styles.label}>Gênero:</Text>
      <Text style={styles.info}>{game.genre}</Text>
      <Text style={styles.label}>Plataforma:</Text>
      <Text style={styles.info}>{game.platform}</Text>
      <Text style={styles.label}>Desenvolvedor:</Text>
      <Text style={styles.info}>{game.developer}</Text>
    </View>
  );
};

export default GameListItem;
