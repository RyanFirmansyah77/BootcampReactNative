import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<ScrollView>
      	<View style={styles.top}>
	        <Text style={{ fontWeight:'bold',fontSize:30}}>Tentang Saya</Text>
	        <Icon style={styles.account} name="account-circle" size={200} />
	        <Text style={{ fontWeight:'bold',fontSize:20}}>Uzumaki Saburo</Text>
	        <Text style={{ color:'lightblue',fontSize:15}}>React Native Developer</Text>
	    </View>
	    <View style={styles.row}>
         		<Text style={{padding:10}}>portofolio</Text>
         </View>
        <View style={styles.portofolio}>
         	<View style={styles.col}>
	         	<Icon2 style={styles.iconPortofolio} name="logo-github" size={50} />
	         	<Text style={styles.textA}>@github</Text>
         	</View>
         	<View style={styles.col}>
	         	<Icon2 style={styles.iconPortofolio} name="logo-python" size={50} />
	         	<Text style={styles.textA}>python</Text>
         	</View>
         	<View style={styles.col}>
	         	<Icon2 style={styles.iconPortofolio} name="logo-javascript" size={50} />
	         	<Text style={styles.textA}>javascript</Text>
         	</View>
        </View>
        <View style={styles.row}>
        	<Text style={{padding:10}}>Hubungi Saya</Text>
 		</View>
        <View style={styles.hubungisaya}>
        	
        	<View style={styles.col1}>
        		<Icon2 style={styles.iconPortofolio} name="logo-facebook" size={50} />
        		<Text style={styles.textH}>@facebok</Text>
        	</View>
        	<View style={styles.col1}>
         		<Icon2 style={styles.iconPortofolio} name="logo-twitter" size={50}/>
         		<Text style={styles.textH}>@tiwt</Text>
         	</View>
         	<View style={styles.col1}>
	         	<Icon2 style={styles.iconPortofolio} name="logo-instagram" size={50} />
	         	<Text style={styles.textH}>@insat</Text>
         	</View>
         	
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top:{
  	flex:1,
  	backgroundColor:'white',
  	marginTop:25,
  	justifyContent:'center',
  	alignItems:'center',
  	
  },
  account:{
  	color:'#EFEFEF'
  },
  portofolio:{
  	marginTop:0,
  	borderRadius:12,
  	marginHorizontal: 15,
  	flexDirection:'row',
  	justifyContent:'space-around',
  	backgroundColor:'#EFEFEF'
  },
  row:{
  	justifyContent:'flex-start',
  	borderWidth: 1,
  	borderRadius:12,
  	marginHorizontal: 15,
  	marginTop:10
  },
  iconPortofolio:{
  	color:'lightblue'
  },
  hubungisaya:{
  	marginHorizontal: 15,
  	alignItems:'center',
  	backgroundColor:'#EFEFEF'
  },
  col1:{
  	flexDirection:'row',
  	margin:5,
  	padding:20,
  	alignItems:'center',
  	justifyContent: 'center'
  },
  textH:{
  	padding:10, 
  	fontWeight:'bold'
  },
  textA:{
  	fontWeight:'bold'
  }

});