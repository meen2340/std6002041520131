import React , { Component } from 'react';
import { View, Image, Button, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';


class About extends Component {
    constructor() {
        super();
        this.state ={
            name: '',
            email: ''
        }
    }
    componentDidMount() {
        const url = 'http://128.199.240.120:9999/api/auth/me';
        const config = {
            headers: {
                accept: '*/*',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1Y2E1YWZhMzE5OGUwMDA4NDcyZGRlMmIiLCJpYXQiOjE1NTQ5NjY0MjB9.BBZWsSiW73Bb5kKMk2YrD-kGdX2OD5ORdcs4MxCMfF0'
            }
        }
        axios.get(url,config)
        .then(response => {
            console.log(response.data.data);
            this.setState({
                email: response.data.data.email,
                name: response.data.data.name
            })
        })
        .catch(error => {
            console.log('error',error)
        })
    }
    render() {
        if(this.state.name == ''){
          return(
              <View>
                <ActivityIndicator size="large" color="#AED6F1" />
            </View>
          )  
        }
        return (
            <View>
                <Text>Name: {this.state.name}</Text>
                <Text>Email: {this.state.email}</Text>
            </View>
        );
    }

}

export default About;
