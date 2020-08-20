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




    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
        }

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
    componentDidMount() {
        Dimensions.addEventListener('change', (e) => {
            const { width } = e.window;
            this.setState({ width: width });
        })
    }



    render() {
        let catStyle = new StyleSheet.create({
            containetr: {
                flex: 1,
                padding: 20,
                width: this.state.width,
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
                width: this.state.width < 526 ? 150 : this.state.width * 0.3,
                height: 100,
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
                borderBottomColor: '#f7b401',
                borderLeftColor: '#f7b401',
                borderLeftWidth: 1,
                borderBottomWidth: 2,
            },

            catItemEnd: {
                flex: 1,
                alignItems: 'center',
                width: this.state.width < 526 ? 150 : this.state.width * 0.3,
                height: 100,
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
                borderBottomColor: '#f7b401',
                borderRightColor: '#f7b401',
                borderRightWidth: 1,
                borderBottomWidth: 2,
            },
            itemsContainer: {
                width:this.state.width < 526 ? this.state.width*0.9 : this.state.width*0.7,
            },
            itemText: {
                color: "#000000",
                fontSize: 20
            }

        });
        let { navigation } = this.props;
        return (
            <View style={catStyle.containetr}>
                <Text style={catStyle.heading}>
                    Categories
                </Text>
                <View style={catStyle.itemsContainer}>
                    {this.CatItems.map((item, index) => {
                        let poss = 'left';
                        let appStyle = { ...catStyle.catItem };
                        if (index % 2 == 1) {
                            appStyle = { ...catStyle.catItemEnd, marginTop: -120 };
                        }
                        return (
                            <TouchableWithoutFeedback
                                onPress={() => navigation.navigate('Details')}
                                key={item.id}>
                                <View style={appStyle}>
                                    <Text style={catStyle.itemText}>
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