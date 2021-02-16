import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddWork from './AddWork'
import Bluetooth from './Bluetooth'
const Stack = createStackNavigator()

const RootStack = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="AddWork" component={AddWork} />
        <Stack.Screen name="Bluetooth" component={Bluetooth} />
    </Stack.Navigator>
)

export default RootStack