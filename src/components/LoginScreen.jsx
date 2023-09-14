import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = StyleSheet.create({
      menu: {
        padding: 100,
        backgroundColor: "#e8e5d8",
        margin: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        
      },
      text: {
          color: "#ffffff",
          fontSize: 24,
          alignItems: "center",
      },
      input: {
        width: '200%',
        borderColor: 'gray',
        borderWidth: 2,
        padding: 10,
        marginTop: 10,
      },
      buttonContainer: {
        backgroundColor: '#e6b70e',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
  })

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Por favor, preencha todos os campos.');
    } else {
      if (email == 'User' && password == '123456') {
        navigation.navigate('Home');
      } else {
        Alert.alert('Credenciais inválidas. Tente novamente.');
      }
    }
  };

  return (
    <View style={{backgroundColor: "#000000", flex: 1,paddingTop: 100}}>
      <View style={styles.menu}>
        <Text style={styles.text}>Email:</Text>
        <TextInput
          placeholder="Digite seu email"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
        />

        <Text style={styles.text}>Senha:</Text>
        <TextInput
          placeholder="Digite sua senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          style={styles.input}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
