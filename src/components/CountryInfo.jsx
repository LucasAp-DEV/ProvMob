import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      borderWidth: 1,
      padding: 10,
      width: 200,
      marginBottom: 10,
    },
    countryInfoContainer: {
      backgroundColor: '#00BFFF',
      marginTop: 20,
      padding: 10,
      borderRadius: 10,
    },
    label: {
      fontWeight: 'bold',
    },
    leftAlign: {
      textAlign: 'left',
    },
  });

const CountryInfo = () => {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);

  const fetchCountryData = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      const country = response.data[0];
      setCountryData(country);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do país"
        onChangeText={(text) => setCountryName(text)}
        value={countryName}
        style={styles.input}
      />
      <Button
        title="Pesquisar"
        onPress={fetchCountryData}
        disabled={countryName.length === 0}
      />
      {countryData && (
        <View style={styles.countryInfoContainer}>
          <Text style={[styles.label, styles.leftAlign]}>Nome oficial:</Text>
          <Text style={styles.leftAlign}>{countryData.name.official}</Text>

          <Text style={[styles.label, styles.leftAlign]}>Região:</Text>
          <Text style={styles.leftAlign}>{countryData.region}</Text>

          <Text style={[styles.label, styles.leftAlign]}>Subregião:</Text>
          <Text style={styles.leftAlign}>{countryData.subregion}</Text>

          <Text style={[styles.label, styles.leftAlign]}>Área:</Text>
          <Text style={styles.leftAlign}>{countryData.area}</Text>

          <Text style={[styles.label, styles.leftAlign]}>População:</Text>
          <Text style={styles.leftAlign}>{countryData.population}</Text>

          <Text style={[styles.label, styles.leftAlign]}>Capital:</Text>
          <Text style={styles.leftAlign}>{countryData.capital}</Text>
        </View>
      )}
    </View>
  );
};

export default CountryInfo;
