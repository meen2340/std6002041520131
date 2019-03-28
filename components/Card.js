import React , { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
                <CardSection styles = { styles.cardsec1 }>
                    <Image
                    style={{ width: 100, height: 100, margin: 10 }}
                    source={{uri: 'https://images.unsplash.com/photo-1486530555807-11f29d0dff36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}}
                    />
                    <Text>Persona</Text>
                    <Text>BTS</Text>
                </CardSection>
                <CardSection>
                    <Image
                    style={{ width: 300, height: 300, marginRight: 55, marginLeft: 55, marginBottom: 10, marginTop: 10 }}
                    source={{uri: 'https://images.unsplash.com/photo-1486530555807-11f29d0dff36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}}
                    />
                </CardSection>
                <CardSection>
                    <View style={{ justifyContent: 'center',alignItems: 'center' }}>
                        <View style={{width: 100 }}>
                            <Button
                            title="Buy now!"
                            color="#841584"
                            />
                        </View>
                    </View>
                    
                    
                </CardSection>
            </View>
        );
    }
}
const styles= {
    cardsec1: {
        
    }
}
export default Card;
