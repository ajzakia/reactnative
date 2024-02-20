import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './CarViewwer.styles';

const initialState = {};
/**
 * Composant CarViewwer
 * @param {object} props props du composant carViewwer
 * @returns {React.ReactNode}
 */
const CarViewwer = props => {
  const [state, setState] = useState(initialState);
  return (
    <View style={styles.CarViewwer} testID="CarViewwer">
      <Text>CarViewwer</Text>
    </View>
  );
};

CarViewwer.propTypes = {};
CarViewwer.defaultProps = {};

export default CarViewwer;
