import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddWork from './AddWork'
import InfoPage from './InfoPage'
import RootStack from './RootStack'
const HomeStack = createStackNavigator()
function Add() { return <RootStack /> }
const HomeStackScreen = () => (
    <HomeStack.Navigator headerMode="none">
        <HomeStack.Screen name="Add" component={Add} />
        <HomeStack.Screen name="AddWork" component={AddWork} />
        <HomeStack.Screen name="InfoPage" component={InfoPage} />
    </HomeStack.Navigator>
)

export default HomeStackScreen