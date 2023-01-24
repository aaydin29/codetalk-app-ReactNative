import React from 'react';
import {View, Image} from 'react-native';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './Login.style';

const Login = ({navigation}) => {
  const handleSign = () => {
    navigation.navigate('Sign up');
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
      <Button text="Log in" theme="secondary" />
      <Button text="Sign up" onPress={handleSign} />
    </View>
  );
};

export default Login;
