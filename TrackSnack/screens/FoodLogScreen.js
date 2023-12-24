import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';

const FoodLogScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

 
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => alert(error.message));
  };


  return (
    <View style={styles.container}>
      <View style={styles.emailContainer}>
        <Text style={styles.emailText}>Email: {auth.currentUser?.email}</Text>
      </View>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.signOutButton}
      >
        <Text style={styles.signOutButtonText}>Sign out</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search our database!"
          style={styles.input}
          value={searchText}
          onSubmitEditing={() => { /* handleSearch(searchText) */ }}
          onChangeText={text => setSearchText(text)}
        />
      </View>
    </View>
  );
};

export default FoodLogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailContainer: {
    // Additional styles as needed
  },
  emailText: {
    textAlign: 'center',
  },
  signOutButton: {
    backgroundColor: '#0782F9',
    padding: 15,
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  signOutButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
