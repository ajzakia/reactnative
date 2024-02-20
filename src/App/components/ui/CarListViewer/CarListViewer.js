import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
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
    <View style={styles.CarListViewer} testID="CarListViewer">
      <Text>CarListViewer</Text>
    </View>
  );
};

CarListViewer.propTypes = {};
CarListViewer.defaultProps = {};

export default CarListViewer;
