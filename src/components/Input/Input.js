import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Input.style';

const Input = ({placeholder, onChangeText, value, isSecure}) => {
  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.input_text}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isSecure}
        placeholderTextColor="white"
      />
    </View>
  );
};

export default Input;
