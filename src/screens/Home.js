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
import { ScrollView, TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            moreMenuVisibility: false
        }
    }


    componentDidMount() {
        Dimensions.addEventListener('change', () => {
            const { width, height } = Dimensions.get('window');
           this.setState({ width: width, height: height });
        })
    }

    render() {

        let stylesheet = new StyleSheet.create({
            homeContainer: {
                flex: 1,
                alignItems: "center",
                backgroundColor: "#ffffff"
            },
            header: {
                backgroundColor: '#f7b401',
                width: this.state.width,
                height: this.state.height * 0.3,
                borderBottomRightRadius: 100,
                borderBottomColor: '#ffffff',
                flexDirection: "row",
                justifyContent: 'space-between',
                paddingTop: 20,
                paddingHorizontal: 20
            },
            menuBtn: {
                color: '#f7b401',
                fontSize: 25,
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
            },
            headerText: {
                flex: 1,
                position: 'absolute',
                top: this.state.height * 0.13   ,
                color: '#ffffff',
                fontSize: 20,
                left: this.state.width * 0.2,
                right: this.state.width * 0.2,
                textAlign: "center"
            },
            searchbarContainer: {
                position: 'absolute',
                top: this.state.height * 0.25,
                alignSelf: 'baseline',
                marginLeft: 10,
            },
            moreMenuBtn: {
                color: '#ffffff',
                fontSize: 25,
                marginTop: 5
            },
            moreMenu: {
                backgroundColor: "#ffffff",
                position: "absolute",
                top: 55,
                right: 20,
                paddingHorizontal: 20,
                borderRadius: 10,
                minWidth: 150,
                zIndex: 9,
                paddingTop: 10,
                paddingBottom: 5
            },
            moreMenuText: {
                fontSize: 16,
                color: "#000000",
                marginBottom: 10
            }
        });


        let { navigation } = this.props;
        return (
            <ScrollView>
                <View style={stylesheet.homeContainer}>
                    <View style={stylesheet.header}>
                        <TouchableOpacity>
                            <Feather
                                name="menu"
                                style={stylesheet.menuBtn}
                            />
                        </TouchableOpacity>
                        <Text style={stylesheet.headerHeading}>
                            Shop Now
                         </Text>
                        <TouchableWithoutFeedback
                            onPress={() => { this.setState({ moreMenuVisibility: !this.state.moreMenuVisibility }) }}
                        >
                            <Feather
                                name="more-vertical"
                                style={stylesheet.moreMenuBtn}
                            />
                        </TouchableWithoutFeedback>
                        {
                            this.state.moreMenuVisibility ?
                                <View style={stylesheet.moreMenu}>
                                    <TouchableWithoutFeedback>
                                        <Text style={stylesheet.moreMenuText}>Account</Text>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback>
                                        <Text style={stylesheet.moreMenuText}>Settings</Text>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback>
                                        <Text style={stylesheet.moreMenuText}>About</Text>
                                    </TouchableWithoutFeedback>
                                </View>
                                :
                                <></>
                        }

                        <Text style={stylesheet.headerText}>
                            Lorem Ipsum Dollar Site Amet
                        </Text>
                    </View>
                    <View style={stylesheet.searchbarContainer}>
                        <SearchBar />
                    </View>
                    <CategoryListBoxed navigation={navigation} />


                </View>
            </ScrollView>
        );
    }
}