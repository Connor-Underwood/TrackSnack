import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
    styles={styles.container}
    behavior='padding' // makes sure the keyboard when shown does not cover the input fields
    >
        <View style = {styles.inputCOntainer}>
            <TextInput
                placeholder = "Email"
                //value = {}
                //onChangeText = {text => }
                style = {styles.input}
            />
                        <TextInput
                placeholder = "Email"
                // value = {}
                //onChangeText = {text => } 
                style = {styles.input}
                secureTextEntry
            />
        </View>
    

      <Text>Login Screen</Text>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})