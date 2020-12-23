import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        	<Image source={require('./images/logo.png')} 
          		style={{ 
          		width:300,
          		height:100,
          		resizeMode: 'contain'

        	}} />
        	<Text style = {styles.textLogin}>LOGIN</Text>
        	<Text style = {styles.text}>Username/Email</Text>
        	<TextInput
          		style={{ height: 40,marginVertical:10, borderColor: 'black', borderWidth: 1 }}
        	/>
        	<Text style = {styles.text}>Password</Text>
        	<TextInput
          		style={{ height: 40,marginVertical:10, borderColor: 'black', borderWidth: 1 }}
        	/>
        	<TouchableOpacity
        		style={styles.buttonMasuk}>
        		<Text style = {styles.textTengah} >Masuk</Text>
        	</TouchableOpacity>
        	<Text style={{textAlign:'center',color:'lightblue'}}>atau</Text>
        	<TouchableOpacity
        		style={styles.buttonDaftar}>
        		<Text style = {styles.textTengah}>Daftar?</Text>
        	</TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25
  },
  textTengah:{
  	color:'white'
  },
  textLogin:{
  	textAlign:'center',
  	fontSize:20,
  	fontWeight:'bold',
  	marginVertical:10
  },
  buttonMasuk:{
  	backgroundColor : "#3EC6FF",
  	marginVertical: 10,
  	alignItems:'center',
  	padding:10,
  	borderRadius:12,
  	width:200,
  	marginHorizontal:50 	
  },
   buttonDaftar:{
  	backgroundColor : "#003366",
  	marginVertical: 10,
  	alignItems:'center',
  	padding:10,
  	borderRadius:12,
  	width:200,
  	marginHorizontal:50 	
  }
});