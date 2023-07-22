import {View, StatusBar} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';

import Navigation from './src/navigation';




const App = () => {
  return (
    <>
     <StatusBar barStyle='dark-content'/>
     <View style= {{flex: 1}}>
      <Navigation/>
     </View>  
    </>
      
  );
};

export default App;
