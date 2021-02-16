import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import InfoPage from './InfoPage'
import AddWork from './AddWork'
import Bluetooth from './Bluetooth'

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Bluetooth" component={Bluetooth} />
      <Stack.Screen name="Lumos 499" component={AddWork} />
      <Stack.Screen name="InfoPage" component={InfoPage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  )
}