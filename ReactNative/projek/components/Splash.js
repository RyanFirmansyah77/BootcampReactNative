import React, { useEffect } from 'react';
import { View, StyleSheet, Image ,Text} from 'react-native';


const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }]
            });
        }, 4000);
    });

    return (
        <View style={Styles.splash}>
             <Image source={require('../assets/logo.png')} resizeMode="center" style = {{width:80,height:80}}/>   
             <Text style={{fontSize: 20}}>Weather Forecast V1.0</Text>
        </View>
    )
};
const Styles = StyleSheet.create({
    splash: {
        flex: 1,
        justifyContent:  'center' ,
        alignItems: 'center',
        backgroundColor: 'white'
    },

})
export default Splash;
