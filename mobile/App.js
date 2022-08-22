import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomDatePicker from './src/components/CustomDatePicker/CustomDatePicker';

import Navigation from './src/navigation';
import AppointmentForm from './src/screens/AppointmentForm/AppointmentForm';
import DoctorDetailScreen from './src/screens/DoctorDetailScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <AppointmentForm />
      {/*  <Navigation />*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
