import React, { Component,useState}  from 'react';
import {
    View, StyleSheet, Text, Image, TextInput,Button
} from 'react-native';
import Constants from 'expo-constants';
import { connect } from "react-redux";
import { types, screen } from "../redux/actiontypes";


class Login extends Component {
    constructor() {
        super();
    }
    
    render() {
        const { navigation } = this.props;
        let error = <View></View>;
        if (this.props.isError) {
            error = (
                <Text style={{ color: "red", alignSelf: "center" ,marginTop: 10 }}>
                    Username or Password is Wrong
                </Text>
            );
        }
    
        return (
            <View style={Styles.container}>
                <Image source={require('../assets/logo.png')} style={{
                    width: 70,
                    height: 70,
                    marginBottom: 200     
                }} />
                <View>
                    <TextInput style={Styles.input}  placeholder="Username"
                        onChangeText={(text) => {
                            this.props.setUsername(text);
                        }}
                    />
                </View>
                <View>
                    <TextInput style={Styles.input}  secureTextEntry={true} placeholder="Password"
                        onChangeText={(text) => {
                            this.props.setPassword(text);
                        }}
                    />
                </View>
                <View style={Styles.button}>
                    <Button title="Login"color="black" 
                        onPress={() => {
                            console.log(this.props)
                            if (this.props.username === "admin" && this.props.password === "admin") {
                                 this.props.navigation.reset({
                                    index: 0,
                                    routes: [{name: 'Home'}],
                                });
                                this.props.setError(false);         
                            } else {
                                this.props.setError(true);
                            }
                        }}
                    />
                    {error}
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    input: {      
        borderColor: 'black',
        width: 200,
        borderWidth: 1,
        borderRadius: 12,
        textAlign:'center',
        marginVertical: 10
    },
    button:{
        width: 200
    }
})

const mapStateToProps = (state) => {
    return {
        username: state.login.username,
        password: state.login.password,
        isError: state.login.isError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (username) => {
            dispatch({ type: types.INPUT_USERNAME, screen: screen.LOGIN, username });
        },
        setPassword: (password) => {
            dispatch({ type: types.INPUT_PASSWORD, screen: screen.LOGIN, password });
        },
        setError: (isError) => dispatch({ type: types.ERROR, screen: screen.LOGIN, isError }),
    };
};

LoginScreen = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginScreen;
  
