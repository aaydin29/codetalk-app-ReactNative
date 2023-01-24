import React from 'react';
import {View, Image} from 'react-native';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './Sign.style';

const Sign = ({navigation}) => {
  const handleBackToLogin = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require('../../assets/images/logo-codetalk.png')}
        />
      </View>
      <Input placeholder="Enter your e-mail..." />
      <Input placeholder="Enter your password..." />
      <Input placeholder="Enter your password again..." />
      <Button text="Sign up" theme="secondary" />
      <Button
        text="Back to Login"
        theme="primary"
        onPress={handleBackToLogin}
      />
    </View>
  );
};

export default Sign;
