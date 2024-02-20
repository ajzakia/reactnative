import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import propTypes from 'prop-types';
import styles from './CarListViewer.styles';

const initialState = {};
/**
 * Composant CarListViewer
 * @param {object} props props du composant carListViewer
 * @returns {React.ReactNode}
 */
const CarListViewer = props => {
  const [state, setState] = useState(initialState);
  return (
    <View style={styles.mainFrame} testID="CarListViewer">
      <Text>CarListViewer</Text>

      <View>
        <View style={styles.descriptionFrame}>
          <Text>{props.id}</Text>
          <Text>{props.imat}</Text>
          <Text>{props.couleur}</Text>
          <Text>{props.marque}</Text>
          <Text>{props.prix}</Text>
        </View>

        <View style={styles.photoFrame}>test2</View>
      </View>
    </View>
  );
};

CarListViewer.propTypes = {
  id: propTypes.int,
  imat: propTypes.string,
  couleur: propTypes.string,
  marque: propTypes.string,
  model: propTypes.string,
  photo: propTypes.string,
  disponible: propTypes.boolean,
  prix: propTypes.int,
};

CarListViewer.defaultProps = {};

export default CarListViewer;
