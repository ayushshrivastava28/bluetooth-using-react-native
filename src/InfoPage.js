import React from 'react'
import { View, Text, SafeAreaView, Dimensions, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/AntDesign'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [], isLoading: true, temp: "", city: "Hyderabad", icon: "", city_display: "", desc: "" }
        this.fetch_weather()
    }

    fetch_weather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=194e2803dd6a9911e1805433c9b7814e`)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json });
                this.setState({ temp: (json.main.temp - 273.15).toFixed(2) + " °C" })
                this.setState({ city_display: json.name })
                this.setState({ icon: json.weather[0].icon })
                this.setState({ desc: json.weather[0].description })
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            }, []);
    }

    leftClick = () => { alert('Left is clicked') }
    rightClick = () => { alert('Right is clicked') }
    upClick = () => { alert('Up is clicked') }
    downClick = () => { alert('Down is clicked') }
    bluetoothClick = () => { alert('Bluetooth is clicked') }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('./img/bgrnd.jpg')} style={styles.Image_Background_Style}>
                    <View style={{ width: '30%', alignSelf: 'flex-start' }}>
                        <Ionicons name="md-arrow-back" size={32} onPress={() => this.props.navigation.goBack()} />
                    </View>
                    {/* <View style={styles.Search_Box_View}>
                        <TextInput
                            placeholder="Search"
                            style={styles.Search_Box}
                            placeholderTextColor="#fff"
                            onChangeText={(text) => this.setState({ city: text })}
                        />
                        <TouchableOpacity style={styles.button_touch} onPress={this.fetch_weather}>
                            <Icon name="search1" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View> */}
                    <View style={styles.Weather_Box_Main}>
                        <View style={styles.Weather_Holder_View}>
                            <Image tintColor='#fff' source={{ uri: "http://openweathermap.org/img/wn/" + this.state.icon + "@2x.png", }}
                                style={styles.Weather_Image} />
                            <View>
                                <Text style={styles.temprature_text}>{this.state.temp}</Text>
                                <Text style={styles.city_text}>{this.state.city_display}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 120 }}>
                        <TouchableOpacity onPress={() => this.upClick()}>
                            <AntDesign name={'up'} size={40} color="black" style={{ textAlign: 'center', margin: 5 }} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', marginTop: '10%', justifyContent: 'space-evenly', }}>
                            <TouchableOpacity onPress={() => this.leftClick()}>
                                <AntDesign name={'left'} size={40} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.bluetoothClick()}>
                                <Feather name={'bluetooth'} size={60} color="#4c32a8" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.rightClick()}>
                                <AntDesign name={'right'} size={40} color="black" />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.downClick()}>
                            <AntDesign name={'down'} size={40} color='black' style={{ textAlign: 'center', margin: 40 }} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: Dev_Height,
        width: Dev_Width
    },
    Image_Background_Style: {
        height: "100%",
        width: "100%"
    },
    Search_Box_View: {
        height: "20%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    Search_Box: {
        height: "35%",
        width: "80%",
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 15,
        color: "#fff",
        paddingHorizontal: 15
    },
    button_touch: {
        marginLeft: "5%",
        height: "35%",
        width: "8%",
        justifyContent: "center",
        alignItems: "center"
    },
    Weather_Box_Main: {
        height: "15%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: '10%'
    },
    Weather_Holder_View: {
        height: "100%",
        width: "90%",
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 15,
        alignItems: "center",
        flexDirection: "row"
    },
    Weather_Image: {
        height: "100%",
        width: "50%",
        resizeMode: 'contain'
    },
    temprature_text: {
        fontSize: 30,
        color: "#fff",
        marginLeft: "5%"
    },
    city_text: {
        fontSize: 20,
        color: "#fff",
        marginLeft: "5%",
        marginTop: "3%"
    },
    Info_Box_View: {
        height: "45%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    Info_Holder_Veiw: {
        height: "80%",
        width: "90%",
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        borderRadius: 15
    },
    Main_Weather_Text: {
        fontSize: 28,
        color: "#464646",
        marginLeft: "8%",
        marginTop: "8%",
        fontWeight: "bold"
    },
    description_text: {
        fontSize: 20,
        color: "#121212",
        marginLeft: "8%",
        marginTop: "3%"
    },
    humidity_text: {
        fontSize: 18,
        color: "#121212",
        marginLeft: "8%",
        marginTop: "5%"
    },
    other_text: {
        fontSize: 18,
        color: "#121212",
        marginLeft: "8%",
        marginTop: "2%"
    }
})