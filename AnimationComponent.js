import React,{useState,useRef} from 'react';
import { Animated, View,StyleSheet,Button,Text } from 'react-native';

const AnimationComponent=props=>{
    
    const fadeAnim=useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500
        }).start();
      };
    
      const fadeOut = () => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1500
        }).start();
      };
    
    return(
        <View  style={{flex:1}}>
            <Animated.View
            useNativeDriver={true}
                style={[
                    styles.fadingContainer,
                    {opacity:fadeAnim}
                ]}
            >
              <Text style={styles.fadingText}>Fading View!</Text>

            </Animated.View>
            <View style={styles.buttonRow}>
                <Button title="Fade In" onPress={fadeIn} />
                <Button title="Fade Out" onPress={fadeOut} />
          </View>
    </View>
    )
}

const styles=StyleSheet.create({
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "powderblue"
      },
      fadingText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10
      },
      buttonRow: {
        flexDirection: "row",
        marginVertical: 16
      }
})

export default AnimationComponent;