import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from './Header';
import Card from './Card';
import Login from './Login';
import Profile from './Profile';

// class App extends React.Component {
//     render() {
//         return (
//             <View >
//                 <Header title="Login" />
//                 <Login></Login>
//                 {/* <Card></Card> */}
//                 {/* <Text>sasiwimon muangpatum</Text> */}
//             </View>
//         );
//     }
// }
const MainNavigator = createStackNavigator({
	Login: {screen : Login},
	Profile: { screen : Profile }
},{
	initialRouteName: "Login"
	
});

const App = createAppContainer(MainNavigator);


export default App;
