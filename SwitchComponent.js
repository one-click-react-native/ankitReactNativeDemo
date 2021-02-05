import React,{useState} from 'react';
import 
    {View,StyleSheet,
     Switch,StatusBar,Button}
       from 'react-native';

const SwitchComponent=props=>{

    const [enabled,setEnabled]=useState(false);

    const styleTypes=['default','dark-content','light-content'];
    const [visibleStatusBar,setVisibleBar]=useState(false);
    const [styleStatusBar,setStyleStatusBar]=useState(styleTypes(0));

    const changeVisibility=()=>{
        setVisibleBar(!visibleStatusBar);
    }
    const changeStyleStatusBar = () => {
        const styleId = styleTypes.indexOf(styleStatusBar) + 1;
    
        if(styleId === styleTypes.length){
          return setStyleStatusBar(styleTypes[0]);
        }
        return setStyleStatusBar(styleTypes[styleId]);
      };

    return(
        <View style={{flex:1,flexDirection:'column'}}>
            <Switch 
                trackColor={{false: "#767577", true: "#81b0ff"}}
                thumbColor={enabled ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={()=>setEnabled(prevState=>!prevState)}
                value={enabled}
            />

    <View>
        <Text style={styles.textStyle}>StatusBar Style: {styleStatusBar}</Text>
        <Text style={styles.textStyle}>StatusBar Visibility: {!visibleStatusBar ? 'Visible': 'Hidden'}</Text>
      </View>
      <StatusBar backgroundColor="blue" barStyle={styleStatusBar} />
      <View>
        <StatusBar hidden={visibleStatusBar} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Toggle StatusBar" onPress={() => changeVisibilityStatusBar()} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Change StatusBar Style" onPress={() => changeStyleStatusBar()} />
      </View>
    </View>
    )
}

const styles=StyleSheet.create({

});

export default SwitchComponent;