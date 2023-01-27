import React from 'react';
import {View, Image} from 'react-native';
import styles from './Sign.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import {showMessage} from 'react-native-flash-message';
import authErrorMessages from '../../utils/authErrorMessages';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const handleBackToLogin = () => {
    navigation.goBack();
  };

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Passwords must match!',
        type: 'danger',
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.repassword,
      );
      showMessage({
        message: 'User created successfully!',
        type: 'success',
      });
      navigation.navigate('Login');
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
            <Input
              onChangeText={handleChange('repassword')}
              value={values.repassword}
              placeholder="Enter your password again..."
              isSecure
            />
            <Button text="Sign up" theme="secondary" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button
        text="Back to Login"
        theme="primary"
        onPress={handleBackToLogin}
      />
    </View>
  );
};

export default Sign;
