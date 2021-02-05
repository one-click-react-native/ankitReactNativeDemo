import React from 'react';
import {View,Animated,Image, Text} from 'react-native';

const AnimationSpring=props=>{

    let springValue=new Animated.Value(0.3);

    const springFunc=()=>{
        springValue.setValue(0.3);
        Animated.spring(springValue,{
            toValue:1,
            friction:1,            
        }).start();
    }

    return(
        <View style={{flex:1,flexDirection:'column',paddingHorizontal:10}}>
            <Text onPress={springFunc}>Spring</Text>
        <Animated.Image
            style={{ width: 227, height: 200,marginBottom:10, transform: [{scale: this.springValue}] }}
            source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
        </View>
    )
}

export default AnimationSpring;