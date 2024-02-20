import React from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import Button from './components/ui/Button/Button';


function App() {
  return (
    <View>
      <Text>Hello !!!</Text>
      <Button onButtonClicked={ arg => {
        ToastAndroid.show('button clicked depuis App', ToastAndroid.LONG)
      }}
      bgColor='green'>gmsgj</Button>
      <Button bgColor='tomato'>gmsg</Button>
      <Button bgColor='tomato' style={{ width: '45%'}} color='pink'>gmsj</Button>
    </View>
  );
}

export default App;