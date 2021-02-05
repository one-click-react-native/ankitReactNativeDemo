import React,{useState} from 'react';
import {Pressable,View,StyleSheet,ScrollView,RefreshControl} from 'react-native';


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
        <View style={{flex:1,flexDirection:'column'}}>
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
          refreshControl={
            <RefreshControl
            colors='red'
            onRefresh={onRefreshFunc} refreshing={refresh} />
          }
          contentContainerStyle={{flex:1}}>
    
          </ScrollView>
    
        </View>
    )
}

export default PressableRefreshDemo;