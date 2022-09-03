import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomDatePicker from './src/components/CustomDatePicker/CustomDatePicker';

import Navigation from './src/navigation';
import AppointmentForm from './src/screens/AppointmentForm/AppointmentForm';
import AppointmentsScreen from './src/screens/AppointmentsScreen';
import DoctorDetailScreen from './src/screens/DoctorDetailScreen';
import LogInTest from './src/screens/LogIn-test';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/*<AppointmentForm />*/}

      {/*<LogInTest /> */}
      <Navigation />
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
