import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid, Image} from 'react-native';
import Button from './components/ui/Button/Button';
import styles from './components/ui/Button/Button.style';
import CarViewer from './components/ui/CarViewer/CarViewer';

const initialState = {
  id: 0,
  imat: 'bs-700-gd',
  couleur: 'bleu',
  marque: 'renault',
  model: 'megane II',
  photo: 
  undefined,
  //'https://images.caradisiac.com/logos-ref/modele/modele--renault-megane-2/S7-modele--renault-megane-2.jpg',
  disponible: true,
  prix: 2000,
};

function App() {
  //let counter = 0;
  const [car, setCar] = useState(initialState);

  return (
    <View>
      {/*<Text> voiture : {JSON.stringify(car)} </Text>*/}
      <CarViewer car={car} />
    </View>
  );
}

export default App;
