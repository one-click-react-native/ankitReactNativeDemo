import React from 'react';
import {View,StyleSheet, Text, Button, TouchableOpacity, Platform} from 'react-native';
import Swiper from 'react-native-deck-swiper';

const SwiperCopy=props=>{
    return(
            <Swiper
            useViewOverflow={true}
            cards={['Do','More','Of','Makes','You','Happy']}
                renderCard={(card)=>{
                    console.log(card)
                    return(
                    <View style={styles.card}>
                        <Text style={styles.text}>{card}</Text>
                    </View>
                    )
                }}
                cardIndex={0}
                showSecondCard={true}
                verticalSwipe={false}
                disableBottomSwipe={true}
                disableTopSwipe={true}
                infinite={true}
                onSwipedRight={(cardIndex)=>console.log(cardIndex)}
                onSwipedLeft={(cardIndex)=>console.log(cardIndex)}
                stackScale={5}
                stackSize={5}
                
            >
                
            </Swiper>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      flex: 1,
      borderRadius: 4,
      justifyContent: "center",
      backgroundColor: "white"
    },
    text: {
      textAlign: "center",
      fontSize: 50,
      backgroundColor: "transparent"
    }
  });

  export default SwiperCopy;