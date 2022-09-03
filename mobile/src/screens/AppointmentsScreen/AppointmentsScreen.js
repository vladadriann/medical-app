import {View, Text} from 'react-native';
import React from 'react';
import CustomAppointment from '../../components/CustomAppointment';
import {useRoute} from '@react-navigation/native';

const AppointmentsScreen = () => {
  return (
    <View>
      <CustomAppointment />
    </View>
  );
};

export default AppointmentsScreen;
