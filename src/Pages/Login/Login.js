import React from 'react';
import {View, Image} from 'react-native';
import styles from './Login.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import authErrorMessages from '../../utils/authErrorMessages';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const handleSign = () => {
    navigation.navigate('Sign up');
  };

  async function handleFormSubmit(formValues) {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
    } catch (error) {
      showMessage({
        message: authErrorMessages(error.code),
        type: 'danger',
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require('../../assets/images/logo-codetalk.png')}
        />
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onChangeText={handleChange('usermail')}
              value={values.usermail}
              placeholder="Enter your e-mail..."
            />
            <Input
              onChangeText={handleChange('password')}
              value={values.password}
              placeholder="Enter your password..."
              isSecure
            />
            <Button text="Log in" theme="secondary" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="Sign up" onPress={handleSign} />
    </View>
  );
};

export default Login;
