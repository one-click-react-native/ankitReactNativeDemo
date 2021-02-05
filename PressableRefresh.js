import React,{useState,useCallback} from 'react';
import {Pressable,ToastAndroid,View,StyleSheet,ScrollView,RefreshControl,Text} from 'react-native';


const wait=(timeout)=>{
    return new Promise(resolve=>{
      setTimeout(resolve,timeout);
    })
  }

const PressableRefreshDemo=props=>{
   
    const [refresh,setRefresh]=useState(false);
  const onRefreshFunc=useCallback(()=>{
    setRefresh(true);
    wait(2000).then(()=>setRefresh(false));
  })
   
    return(
        <View style={{flex:1,flexDirection:'column',}}>
          <Pressable
          onLongPress={()=>{
            ToastAndroid.show('Long Press!',ToastAndroid.SHORT);
          }}
          onPress={()=>{
            ToastAndroid.show('Press Me!',ToastAndroid.SHORT);
          }} style={{width:'70%',backgroundColor:'grey'}}>
            <Text>Press Me!</Text>
          </Pressable>
    
          <ScrollView
          style={{marginTop:20}}
          refreshControl={
            <RefreshControl
            onRefresh={onRefreshFunc} refreshing={refresh} />
          }
          >
    
          </ScrollView>
    
        </View>
    )
}

export default PressableRefreshDemo;