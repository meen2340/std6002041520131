import React , { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <View style={{flexDirection: "row"}}>
                        <Image
                        style={{ width: 100, height: 100, margin: 10 }}
                        source={{uri: 'https://cdn.shopify.com/s/files/1/0086/9072/9020/products/PERSONA_C-01_288a2353-c89f-4038-8286-b501c23ed723_grande.jpg?v=1552428835'}}
                        ></Image>
                        <View style={{ margin: 15 }}>
                            <Text style={{ fontSize: 20  }}>Map of the soul: Persona</Text>
                            <Text style={{ fontSize: 20 }}>BTS</Text>
                        </View>
                        
                   </View>
                    
  
                </CardSection>
                <CardSection>
                    <Image
                    style={{ width: 350, height: 400, marginRight: 30, marginLeft: 30, marginBottom: 10, marginTop: 10 }}
                    source={{uri: 'http://pm1.narvii.com/7145/e0529f91198df70ad34c98d98d4b33ace5defa2ar1-1080-1587v2_00.jpg'}}
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

export default Card;
