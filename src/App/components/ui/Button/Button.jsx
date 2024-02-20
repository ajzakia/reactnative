import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Button.style';
import propTypes from 'prop-types';

const Button = props => {
  console.log(props);
  return (
    <TouchableOpacity
      onPress={() => {
        props.onButtonClicked();
        console.log('button clicked');
      }}>
      <View style={[styles.vue, props.style, {backgroundColor: props.bgColor}]}>
        <Text style={[styles.texte, {color: props.color}]}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  style: propTypes.object,
  children: propTypes.string.isRequired,
  bgColor: propTypes.string,
 // onButtonClicked: propTypes.func.isRequired,
};
Button.defaultProps = {
  bgColor: 'skyblue',
  color: 'white',
};
export default Button;
