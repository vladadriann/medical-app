import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Tabs from './Tabs';
import DoctorDetailScreen from '../screens/DoctorDetailScreen/DoctorDetailScreen';
import AppointmentForm from '../screens/AppointmentForm/AppointmentForm';
import AdminPage from '../screens/AdminPage';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="DoctorDetail" component={DoctorDetailScreen} />
        <Stack.Screen name="Appointment" component={AppointmentForm} />
        <Stack.Screen name="Admin" component={AdminPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
