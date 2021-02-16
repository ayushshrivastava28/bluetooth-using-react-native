import React from 'react'
import { View, TouchableOpacity, Image, ImageBackground, SafeAreaView, Text } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import { TextInput } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class AddWork extends React.Component {

    constructor() {
        super()
        this.state = { data: [] }
    }

    onAdd = () => { this.setState(prevState => ({ data: [{ deviceName: 'helioStat', deviceLocation: 'bedroom' }, ...prevState.data] })) }

    onRename = () => { this.setState({ data }) }

    render() {
        console.log()
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                    <ImageBackground style={{ width: '100%', height: '80%', backgroundColor: 'white' }} source={require('./img/LUMOS499.png')}>
                        <View style={{ width: '30%', alignSelf: 'flex-start' }}>
                            <Ionicons name="md-arrow-back" size={32} onPress={() => this.props.navigation.goBack()} />
                        </View>
                        <View style={{ flex: 1 }}>
                            {
                                this.state.data.map((index) => {
                                    return (
                                        // <View key={this.state.data.deviceName}>
                                        <Card style={{ padding: 10, margin: 10, opacity: 0.9 }} key={Math.random(index)}>
                                            <TextInput
                                                style={{ fontSize: 20 }}
                                                placeholder="Device name"
                                                value={this.state.data.deviceName}
                                                onChangeText={(value) => this.onRename}
                                                key={index}
                                            />
                                            <TextInput
                                                style={{ fontSize: 20 }}
                                                placeholder="Device location"
                                                value={this.state.data.deviceLocation}
                                                onChangeText={(value) => this.onRename}
                                                key={index + 1}
                                            />
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('InfoPage'); this.state.data.deviceName }}>
                                                <Text style={{ marginLeft: '1%', marginVertical: '2%', fontSize: 16 }}>Submit</Text>
                                            </TouchableOpacity>
                                        </Card>
                                        // </View>
                                    )
                                })
                            }
                        </View>
                    </ImageBackground>
                    <View style={{ backgroundColor: 'white', height: '20%', justifyContent: 'flex-end' }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={this.onAdd}>
                            <Image source={require('./img/floating_button.png')}
                                style={{ resizeMode: 'contain', justifyContent: 'flex-end', alignSelf: 'flex-end', width: 60, height: 60 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}