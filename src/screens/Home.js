import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Feather } from 'react-native-vector-icons';
import SearchBar from '../components/SearchBar';
import CategoryListBoxed from '../components/CategoryListBoxed';
import { ScrollView } from 'react-native-gesture-handler';


export default class Home extends Component {


    stylesheet = new StyleSheet.create({
        homeContainer: {
            flex: 1,
            // justifyContent: 'center',
            alignItems: "center",
            backgroundColor: "#ffffff"
        },
        header: {
            backgroundColor: '#f7b401',
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height * 0.3,
            borderBottomRightRadius: 100,
            borderBottomColor: '#ffffff',
            flexDirection: "row"
        },
        menuBtn: {
            color: '#f7b401',
            fontSize: 25,
            marginLeft: 10,
            marginTop: 20,
            backgroundColor: '#ffffff',
            width: 50,
            height: 50,
            textAlign: 'center',
            textAlignVertical: "center",
            borderRadius: 100,
            fontWeight: 'bold'
        },
        headerHeading: {
            color: '#ffffff',
            fontWeight: "bold",
            fontSize: 28,
            marginTop: 25,
            marginLeft: Dimensions.get('screen').width * 0.2,
        },
        headerText: {
            flex: 1,
            position: 'absolute',
            top: Dimensions.get('screen').height * 0.13,
            color: '#ffffff',
            fontSize: 20,
            left: Dimensions.get('screen').width * 0.2,
            right: Dimensions.get('screen').width * 0.2,
            textAlign: "center"
        },
        searchbarContainer: {
            position: 'absolute',
            top: Dimensions.get('screen').height * 0.25,
            alignSelf: 'baseline',
            marginLeft: 10
        }
    });

    constructor(props) {
        super(props);
    }

    render() {
        let { navigation } = this.props;
        return (
            <ScrollView>
                <View style={this.stylesheet.homeContainer}>
                    <View style={this.stylesheet.header}>
                        <TouchableOpacity>
                            <Feather
                                name="menu"
                                style={this.stylesheet.menuBtn}
                            />
                        </TouchableOpacity>
                        <Text style={this.stylesheet.headerHeading}>
                            Shop Now
                    </Text>
                        <Text style={this.stylesheet.headerText}>
                            Lorem Ipsum Dollar Site Amet
                    </Text>
                    </View>
                    <View style={this.stylesheet.searchbarContainer}>
                        <SearchBar />
                    </View>
                    <CategoryListBoxed navigation={navigation}/>


                </View>
            </ScrollView>
        );
    }
}