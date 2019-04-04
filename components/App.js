import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import Card from './Card';
import Login from './Login';

class App extends React.Component {
    render() {
        return (
            <View >
                <Header title="Login" />
                <Login></Login>
                {/* <Card></Card> */}
                {/* <Text>sasiwimon muangpatum</Text> */}
            </View>
        );
    }
}



export default App;
