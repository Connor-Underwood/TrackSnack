import React, { useContext, useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';
import AuthContext from '../AuthContext';

const FoodLogScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [searchResults, setSearchResults] = useState([])


  const APP_ID = "0d9b375e"
  const APP_KEY = "b75ef3c25a294386476d882d8fb37cea"

  const handleSearch = async (searchTerm) => {
    const URL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${searchTerm}`

    try {
      const response = await fetch(URL)
      const data = await response.json()
      setSearchResults(data.hints)
      setSuggestions([])
    } catch (error) {
      console.error(error)
    }
  }
 
  const handleAutocomplete = async (searchTerm) => {
    console.log("SEARCHING BREH")
    
    const URL = `https://api.edamam.com/auto-complete?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchTerm}&limit=5`

    try {
      const response = await fetch(URL)
      const data = await response.json()
      setSuggestions(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (searchText.length >= 3) {
      handleAutocomplete(searchText)
    } else {
      setSuggestions([])
    }
  }, [searchText])

  


  return (
    <View style={styles.container}>
      
      {/* Trigger button */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
        <Text>Search</Text>
      </TouchableOpacity>

      {/* Modal for search */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search our database!"
          style={styles.input}
          value={searchText}
          onSubmitEditing={() => handleSearch(searchText)}
          onChangeText={text => setSearchText(text)}
        />
        <FlatList
        data={suggestions}
        keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
      <FlatList
      data={searchResults}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Text>Name: {item.food.label}, Calories: {item.food.nutrients.ENERC_KCAL}, Protein: {item.food.nutrients.PROCNT}, 
      Fat: {item.food.nutrients.FAT}, Carbohydrates: {item.food.nutrients.CHOCDF}</Text>}
      />
      <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.button}>
        <Text>Close</Text>
      </TouchableOpacity>
      </Modal>
      

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
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
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
