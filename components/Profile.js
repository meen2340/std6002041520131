import React from 'react';
import {View, Text, Button} from 'react-native';
import {AsyncStorage} from 'react-native';
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
				//headerTintColor: "",
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
				<Text>Profile</Text>
				<Text>Name : {this.state.name}</Text>
				<Text>Email : {this.state.email}</Text>

				<Button
					title="Logout"
					onPress = { this.onPressLogout}
				/>
			</View>
			

		)

	}
}

export default profile;

