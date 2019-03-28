import React , { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style= { styles.header }>
                <Text style= { styles.text }>
                    { this.props.title }
                </Text>
            </View>
        )
    }
}
const styles = {
    header: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#FADBD8'
        
        
    },
    text: {
        fontSize: 30,
        color: '#2E4053'
        
    }
}

export default Header;
