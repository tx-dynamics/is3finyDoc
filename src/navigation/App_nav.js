/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useRef} from 'react';
import {View, LogBox, PermissionsAndroid, NativeModules} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { StripeProvider } from '@stripe/stripe-react-native';

// import Signin from '../screens/Signin';
// import Main from './main_nav';
import AuthenticationStack from './Auth_nav';
import Main from './main_nav';

//redux
// import {connect} from 'react-redux';

const Stack = createStackNavigator();

function AppNav({}) {
  let initial = 'Auth';

  useEffect(() => {}, []);

  return (
    <NavigationContainer
      independent={true}
    >
      {/* <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="merchant.identifier"
    > */}

        <Stack.Navigator 
          independent={true}
          initialRouteName={initial}>
          <Stack.Screen
            name="Auth"
            component={AuthenticationStack}
            options={{
              headerShown: false,
            }}
          />

          {/* <Stack.Screen name="Root" options={{headerShown: false}}>
            {props => <BottomTab {...props} />}
          </Stack.Screen> */}
           <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: false,
            }}
          />
      </Stack.Navigator>
      {/* </StripeProvider> */}
    </NavigationContainer>
  );
}


export default AppNav;
