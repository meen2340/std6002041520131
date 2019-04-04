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
        );
    }
}
const styles = {
    header: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#AED6F1'
        
        
    },
    text: {
        fontSize: 30,
        color: '#FDFEFE',
        fontWeight: 'bold'
        
    }
}

export default Header;
