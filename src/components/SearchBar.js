import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions
} from 'react-native';
import { Feather } from 'react-native-vector-icons';

export default class SearchBar extends Component {

    render() {
        let searchBarStyle = new StyleSheet.create({
            Container: {
                flexDirection: "row",
                width: Dimensions.get('screen').width * 0.9,
                borderRadius: 50,
                shadowColor: '#000',
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
                borderBottomColor:'#f7b401',
                borderBottomWidth:2
            },
            icon: {
                fontSize: 25,
                textAlignVertical: 'center',
                color: '#000000',
                paddingHorizontal: 10,
                backgroundColor:'#ffffff',
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30
    
            },
            inputBox: {
                backgroundColor: '#ffffff',
                flex: 1,
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                paddingHorizontal: 20,
                color:'#000000',
                fontSize:16
            }
        })
        return (
            <View style={searchBarStyle.Container}>
                <Feather
                    name="search"
                    style={searchBarStyle.icon}
                />
                <TextInput
                    multiline={false}
                    placeholder="Search Here..."
                    style={searchBarStyle.inputBox}
                />
            </View>
        )
    }
}