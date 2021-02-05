import React, { useCallback, useState } from 'react';
import {
  View,
  StyleSheet,
  SwitchComponent,
} from 'react-native';
import AnimationComponent from './AnimationComponent';
import AnimationSpring from './AnimationSpring';
import AppStateDemo from './AppState';
import EasingDemo from './EasingExample';
import PressableRefreshDemo from './PressableRefresh';
import ShareExample from './ShareExample';
import SwitchComponent from './SwitchComponent';
import VibrationDemo from './VibrationExample';

const App=() =>{
  return (
    <View style={{flex:1,flexDirection:'column'}}>
     <AppStateDemo/>
    </View>
    )
}

const styles = StyleSheet.create({
  
});

export default App;
