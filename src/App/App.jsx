import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid, Image} from 'react-native';
import Button from './components/ui/Button/Button';
import styles from './components/ui/Button/Button.style';

function App() {
  //let counter = 0;
  const [counter, setCounter] = useState(1);
  useEffect(() => {  
    // modif et création
    console.log('dans le 1er useEffect', counter);
    /*return () => {
      // destruction de la valeur
    }; */
  }, [counter]);
  
  useEffect(() => {  
    // modif et création
    setCounter(0);
    console.log('dans le useEffect', counter);
    /*return () => {
      // destruction de la valeur
    }; */
  }, []);

  return (
    <View>
          <Text> valeur de counter {counter} </Text>

      <Button
        bgColor="tomato"
        onButtonClicked={arg => {
          ToastAndroid.show('button clicked depuis App', ToastAndroid.SHORT);
          setCounter(counter + 1);
          console.log(counter);
        }}>
        <View>
          <Image
            style={styles.buttonImage}
            source={require('../../assets/img/plus.png')}
          />
          <Text>ajouter 1</Text>
        </View>
      </Button>

      <Button
        bgColor="tomato"
        onButtonClicked={arg => {
          ToastAndroid.show('button clicked depuis App', ToastAndroid.SHORT);
          setCounter(counter - 1);
          console.log(counter);
        }}>
        <View style={styles.buttonView}>
          <Image
            style={styles.buttonImage}
            source={require('../../assets/img/minus.png')}
          />
          <Text>supprimer 1</Text>
        </View>
      </Button>
    </View>
  );
}

export default App;
