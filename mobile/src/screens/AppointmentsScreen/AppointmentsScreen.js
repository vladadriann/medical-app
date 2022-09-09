import {View, Text} from 'react-native';
import React from 'react';
import CustomAppointment from '../../components/CustomAppointment';
import {useRoute} from '@react-navigation/native';

const AppointmentsScreen = () => {
  const route = useRoute();
  const {cameraPhoto, dateAndTime, details} = route.params;

  return (
    <View>
      <CustomAppointment
        cameraPhoto={cameraPhoto}
        dateAndTime={dateAndTime}
        value={details.value}
      />
    </View>
  );
};

export default AppointmentsScreen;
