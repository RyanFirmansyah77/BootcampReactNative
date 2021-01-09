import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image, TouchableOpacity, FlatList, ActivityIndicator, ScrollView 
} from 'react-native';
import Axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: true,
            isError: false,
            kodeCuaca:0
        }
    }
    componentDidMount() {
        this.getId();
    }
    getId = async() => {
        try {

            const response = await Axios.get(`https://ibnux.github.io/BMKG-importer/cuaca/${this.props.route.params.id}.json`);
            this.setState({isError: false, isLoading: false, data: response.data});

        } catch (error) {
            this.setState({isLoading: false, isError: true});
        }
    }

    render() {
        return(
            <View>
                <FlatList
                  data={this.state.data}
                  keyExtractor={({id}, i) => id}
                  renderItem={({item}) => (
                        <View style={Styles.container}>
                            <View style={Styles.date}>
                                <View style={{marginRight:10}}><Fontisto name="date" size={18} color="black" /></View>
                                <Text>{item.jamCuaca}</Text>
                            </View>
                            <View style={Styles.temp}>
                                <Text style={{fontSize: 50}}>{item.tempC} <MaterialCommunityIcons name="temperature-celsius" 
                                size={50} color="black" /> <Image 
                                source={{uri: `https://ibnux.github.io/BMKG-importer/icon/${item.kodeCuaca}.png`}}
                                style={{width: 70, height: 70}} /></Text>  
                                <Text>{item.cuaca}</Text>   
                            </View>                    
                        </View>     
                  )}
                 ItemSeparatorComponent={()=><View style={{height:3,backgroundColor:'#E5E5E5'}}/>}
                />
            </View>
        )
    }
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    date:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    temp:{
        flex: 1,
        justifyContent: 'center',
        alignItems:  'center' 
    },
    
})
