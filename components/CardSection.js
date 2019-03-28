import React , { Component } from 'react';
import { View, Text } from 'react-native';

class CardSection extends Component {
    render() {
        return (
            <View>
                {this.props.children}
                {/* <Text>xxxxxxx</Text> */}
            </View>
        );
    }
}

export default CardSection;
