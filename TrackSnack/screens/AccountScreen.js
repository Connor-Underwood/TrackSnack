import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import { TouchableOpacity } from 'react-native'
import {  auth } from '../firebase'
import AuthContext from '../AuthContext'

const AccountScreen = () => {

    const { setIsAuthenticated } = useContext(AuthContext)
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        setIsAuthenticated(false)
      }).catch(error => alert(error.message))
  }


  return (
    <View>
        
      <Text>AccountScreen</Text>
      <View style={styles.emailContainer}>
        <Text style={styles.emailText}>Email: {auth.currentUser?.email}</Text>
      </View>
      <View
      style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.button}
            onPress={handleSignOut}>

            <Text
            style={styles.buttonText}>
                Sign Out
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
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
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonLink: {
      color: 'blue'
  
    },
    logo: {
      color: 'black',
      position: 'relative',
    },
  })