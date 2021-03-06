import React, { useCallback, useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import AnimationComponent from './AnimationComponent';
import AnimationSpring from './AnimationSpring';
import AppStateDemo from './AppState';
import EasingDemo from './EasingExample';
import PressableRefreshDemo from './PressableRefresh';
import ShareExample from './ShareExample';
import Swiper from './Swiper';
import SwiperCopy from './SwiperDemo';
import SwitchComponent from './SwitchComponent';
import VibrationDemo from './VibrationExample';

const App=() =>{
  return (
    <View style={{flex:1,flexDirection:'column'}}>
     <SwiperCopy/>
    </View>
    )
}

export default App;
