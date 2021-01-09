import React from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity, Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
const About = ({navigation}) => {
    return(
        <View style={Styles.container}>
            <View style={Styles.logo}>
                <Image source={require('../assets/logo.png')} resizeMode="contain" style={{
                    width: 70,
                    height: 70
                }} />
                <Text>Ryan F</Text>
                <View style={{flexDirection: 'row',marginTop: 10}}>
                    <TouchableOpacity style={Styles.sosmed} 
                            onPress={() => Linking.openURL('https://www.facebook.com/ryan.s.cool.754')} >
                            <Ionicons name="logo-facebook" size={40} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.sosmed} 
                            onPress={() => Linking.openURL('https://www.instagram.com/rflawliet/')} >
                            <Ionicons name="logo-instagram" size={40} color="black" />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logo:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',

    },
    sosmed:{
        flexDirection: 'row',
        marginHorizontal: 10,
    }

})

export default About;
