import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

export default class CategoryListBoxed extends Component {

    catStyle = new StyleSheet.create({
        containetr: {
            flex: 1,
            padding: 20,
            width: Dimensions.get('screen').width,
            alignItems: "center"
        },
        heading: {
            color: '#000000',
            fontSize: 25,
            marginVertical: 20,
            fontWeight: 'bold'
        },
        catItem: {
            alignItems: 'center',
            width: 150,
            height: 200,
            justifyContent: 'center',
            margin: 20,
            borderRadius: 20,
            alignSelf: "flex-start",
            shadowColor: '#f7b401',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            backgroundColor: "#fcfcfc",
            borderBottomColor:'#f7b401',
            borderLeftColor:'#f7b401',
            borderLeftWidth:1,
            borderBottomWidth:2,
        },

        catItemEnd: {
            flex: 1,
            alignItems: 'center',
            width: 150,
            height: 200,
            justifyContent: 'center',
            margin: 20,
            borderRadius: 20,
            alignSelf: "flex-end",
            shadowColor: '#f7b401',
            shadowOffset: { width: 1, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            backgroundColor: "#fcfcfc",
            borderBottomColor:'#f7b401',
            borderRightColor:'#f7b401',
            borderRightWidth:1,
            borderBottomWidth:2,
        },
        itemsContainer: {
            width: Dimensions.get('screen').width * 0.9,
        },
        itemText: {
            color: "#000000",
            fontSize: 20
        }

    });


    constructor(props) {
        super(props);
    }

    CatItems = [
        {
            id: 1,
            name: "Featured"
        },
        {
            id: 2,
            name: "Sale"
        },
        {
            id: 3,
            name: "Standard"
        },
        {
            id: 4,
            name: "Others"
        },
    ]

    render() {
        let { navigation } = this.props;
        return (
            <View style={this.catStyle.containetr}>
                <Text style={this.catStyle.heading}>
                    Categories
                </Text>
                <View style={this.catStyle.itemsContainer}>
                    {this.CatItems.map((item, index) => {
                        let poss = 'left';
                        let appStyle = { ...this.catStyle.catItem };
                        if (index % 2 == 1) {
                            appStyle = { ...this.catStyle.catItemEnd, marginTop: -220 };
                        }
                        return (
                            <TouchableWithoutFeedback
                                onPress={() => navigation.navigate('Details')}
                                key={item.id}>
                                <View style={appStyle}>
                                    <Text style={this.catStyle.itemText}>
                                        {item.name}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })}
                </View>
            </View>
        )
    }
}