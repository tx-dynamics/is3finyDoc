import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import SignupScreen from '../screens/SignUp';
// import Signin from '../screens/Sigin';
import Splash from '../screens/Splash';
import Intro from '../screens/Splash/intro';
import AuthSelect from '../screens/auth/auth_select'
import Contact from '../screens/tab_Screens/contact_us'
import SelecField from '../screens/tab_Screens/selec_field'
import FieldList from '../screens/tab_Screens/field_list'
import Login from '../screens/auth/login'
import Forgot from '../screens/auth/forgot'
import NewPass from '../screens/auth/new_password'
import Signup from '../screens/auth/signup'
import Number from '../screens/auth/getnumber'
import Otp from '../screens/auth/otp'
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const AuthenticationStack = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      independent={true}
      initialRouteName="Splash"
      screenOptions={{
        animationTypeForReplace: 'pop',
        headerShown: false,
      }}>
      <Stack.Screen component={Splash} name="Splash" />
      {/* <Stack.Screen component={Intro} name="Intro" /> */}
      <Stack.Screen component={AuthSelect} name="AuthSelect" />
      <Stack.Screen component={Contact} name="Contact" />
      <Stack.Screen component={SelecField} name="SelecField" />
      <Stack.Screen component={FieldList} name="FieldList" />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Forgot} name="Forgot" />
      <Stack.Screen component={Otp} name="Otp" />
      <Stack.Screen component={NewPass} name="NewPass" />
      <Stack.Screen component={Signup} name="Signup" />
      
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AuthenticationStack;
