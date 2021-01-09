import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image, TouchableOpacity, FlatList, ActivityIndicator,ScrollView
} from 'react-native';
import Axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from '../wilayah.json';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={Styles.container}>
          <View style={{marginTop: 30}}>
            <Text>Pilih Lokasi Anda<FontAwesome5 name="home" size={20} color="black"  /></Text>
          </View>
          <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{height: 60,paddingVertical: 20}}>
                    <TouchableOpacity  onPress={() => navigation.navigate('Detail', {id: item.id})}>
                        <Text style={{fontSize: 20}}><Ionicons name="play" size={15} color="black" />{item.kota}</Text>
                    </TouchableOpacity>         
            </View>
          )}
          keyExtractor={(item)=>item.id}
          ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:'#E5E5E5'}}/>}
           />  
      </View>
    );
  }
}
const Styles = StyleSheet.create({
    container:{
      flex: 1
    },

})

