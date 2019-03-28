import React , { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View>
                <Text>{ this.props.title }</Text>
            </View>
        )
    }
}

export default Header;
