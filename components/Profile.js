import React from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

class profile extends React.Component{

	constructor(){
		super();
		this.state = {
			name: "Getting Data...",
			email: "Getting Data...",
			id: "Getting Data",

		};
		this.onPressLogout = this.onPressLogout.bind(this);
    }
    async onPressLogout(){
		await AsyncStorage.removeItem('User_Token');
		alert("Logout Successfully");
		this.props.navigation.navigate("Login");

	}

		static navigationOptions = {
			title: "Profile",
			headerStyle:{
				backgroundColor: '#AED6F1',
				color: '##FDFEFE',
				fontSize: 20,
				},
				headerTintColor: "#FDFEFE",
		};
	async componentDidMount(){
		try{
			const value = await AsyncStorage.getItem('User_Token');
			if(value !== null){
				const url = "http://128.199.240.120:9999/api/auth/me";
				axios.get(url, {
				headers:{
					"Authorization":  " Bearer " + value	
				}
				}).then(function (resp){
					this.setState({
						email: resp.data.data.email,
						name: resp.data.data.name,
						id: resp.data.data._id
					});
				}.bind(this));
			}else{
				alert("Please Login First..");
				this.props.navigation.navigate("Login");
			}


		} catch (error){
			console.log(error);
		}
	
	};



	render(){
		return(
			<View>
				{/* <Text>Profile</Text> */}
				<Text style={styles.Texts}>Name : {this.state.name}</Text>
				<Text style={styles.Texts}>Email : {this.state.email}</Text>

				<Button
					title="Logout"
					onPress = { this.onPressLogout}
					//style={[styles.buttonContainer, styles.loginButton]}
				/>
				{/* <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onPress.bind(this)}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight> */}
			</View>
			

		)

	}
}

const styles = ({
	Texts: {
		color: '#34495E',
		fontWeight: 'bold',
		fontSize: 18,
		margin: 5
	  },
	  buttonContainer: {
		height:45,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom:20,
		width:240,
		borderRadius:30,
	  },
	  loginButton: {
		backgroundColor: "#00b5ec",
	  },
});

export default profile;

