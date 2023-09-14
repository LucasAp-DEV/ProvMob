import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#CD5C5C',
      padding: 15,
    },
    headerText: {
      color: 'white',
      fontSize: 20,
    },
  });

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};


export default Header;
