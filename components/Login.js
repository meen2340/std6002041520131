import React , { Component } from 'react';
import { View, StyleSheet, Image, Button, TextInput, TouchableHighlight, Text } from 'react-native';
import {AsyncStorage} from 'react-native';
import axios from 'axios';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: 'sswm.meen@gmail.com',
            password: ''
        }
        // this.onChangeEmail = this.onChangeEmail.bind(this)
    }
    onChangeEmail(e){
        console.log('onChangeEmail',e)
        this.setState({email: e})
    }
    onChangePassword(e){
        console.log('onChangePassword',e)
        this.setState({password: e})
    }
    onPress(){
        console.log(this.state)
        const url = 'http://128.199.240.120:9999/api/auth/login'
        axios.post(url, this.state)
            .then( async response => {
                console.log('token', response.data.data.token)
                alert("Login Successfully");
                try{
                    await AsyncStorage.setItem('User_Token',response.data.data.token);
                    this.props.navigation.navigate('Profile');
                
                }catch(error){
                    console.log(error);
                }
            })
            .catch(function (error){
                console.log(error)
                alert(error);
            })
    }
    async componentDidMount(){
        let token = await AsyncStorage.getItem("User_Token");
        if(token!=null){
            console.log(token);
            this.props.navigation.navigate("Profile");
        }
        
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder ="Email"
                        value={this.state.email}
                        onChangeText={this.onChangeEmail.bind(this)}
                        // onChangeText={(email) => this.setState({email})}
                    ></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputs}
                        placeholder ="Password"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={this.onChangePassword.bind(this)}
                    ></TextInput>
                </View>
                {/* <Button 
                    style={[styles.buttonContainer, styles.loginButton]}
                    title="Login"
                    //color="#5DADE2"
                    onPress={this.onPress.bind(this)}
                /> */}
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onPress.bind(this)}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style={styles.loginText}>Profile</Text>
                </TouchableHighlight>
          
            </View>
            );
        }
    }
    const styles = StyleSheet.create({
        container: {
          //flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 150,
          //backgroundColor: '#DCDCDC'
        },
        inputContainer: {
            borderBottomColor: '#F5FCFF',
            backgroundColor: '#FFFFFF',
            borderRadius:30,
            borderBottomWidth: 1,
            width:250,
            height:45,
            marginBottom:20,
            flexDirection: 'row',
            alignItems:'center'
        },
        inputs:{
            height:45,
            marginLeft:16,
            borderBottomColor: '#FFFFFF',
            flex:1,
            color: '#34495E'
        },
        inputIcon:{
          width:30,
          height:30,
          marginLeft:15,
          justifyContent: 'center'
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
        loginText: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 18
        }
      });


export default Login;
    
