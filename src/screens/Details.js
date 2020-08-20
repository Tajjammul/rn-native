import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Details extends Component {


    stylesheet = new StyleSheet.create({

        Container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: "center"
        }
    });

    constructor(props) {
        super(props);
    }

    render() {
        let { navigation } = this.props;
        return (
            <View style={this.stylesheet.Container}>
                <Text>
                    Detail Screen
                </Text>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                >
                    <Text>
                        Go Back
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}