import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './Pages/Login';
import Sign from './Pages/Sign';
import Rooms from './Pages/Rooms';
import Messages from './Pages/Messages';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign up" component={Sign} />
    </Stack.Navigator>
  );
};

const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="AuthStack"
            component={AuthStack}
          />
        ) : (
          <Stack.Screen
            options={stackOptionsRoom}
            name="Rooms"
            component={Rooms}
          />
        )}

        <Stack.Screen
          options={stackOptionsMessage}
          name="Messages"
          component={Messages}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

const stackOptionsRoom = () => ({
  headerRight: () => (
    <Icon
      name="logout"
      size={35}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{color: 'black', marginRight: 10}}
      onPress={() => auth().signOut()}
    />
  ),
  headerStyle: {
    backgroundColor: '#eeeeee',
  },
});
const stackOptionsMessage = () => ({
  headerStyle: {
    backgroundColor: '#eeeeee',
  },
});

export default Router;
