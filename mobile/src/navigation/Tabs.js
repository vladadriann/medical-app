import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

import HomeScreen from '../screens/HomeScreen';
import DoctorsScreen from '../screens/DoctorsScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home1') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Doctors') {
            iconName = focused ? 'medical' : 'medical-outline';
          } else if (route.name === 'Appointments') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home1" component={HomeScreen} />
      <Tab.Screen name="Doctors" component={DoctorsScreen} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
