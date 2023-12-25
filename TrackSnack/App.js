import React, { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import FoodLogScreen from './screens/FoodLogScreen'
import RegisterScreen from './screens/RegisterScreen';
import DashBoardScreen from './screens/DashBoardScreen';
import { auth } from './firebase'
import AuthContext from './AuthContext';
import AccountScreen from './screens/AccountScreen';

const MainTab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

function AuthStackScreens() {
  return (
    <AuthStack.Navigator>
    <AuthStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
    <AuthStack.Screen options={{ title: '' }} name="Register" component={RegisterScreen}/>
  </AuthStack.Navigator>
  )
}

function MainTabScreens() {

  return (
    <MainTab.Navigator>
    <MainTab.Screen name="DashBoard" component={DashBoardScreen}/>
    <MainTab.Screen name="FoodLog" component={FoodLogScreen}/>
    <MainTab.Screen name="Account" component={AccountScreen}/>
  </MainTab.Navigator>
  )
}


export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      }
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={ {isAuthenticated, setIsAuthenticated}}>
      <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <RootStack.Screen name="MainTab" component={MainTabScreens} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthStackScreens} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
