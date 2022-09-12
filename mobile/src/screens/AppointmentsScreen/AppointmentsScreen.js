import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import CustomAppointment from '../../components/CustomAppointment';
import {useRoute} from '@react-navigation/native';
import {AuthState} from '../../context/AuthContext';
import {useContext} from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import AppointmentItem from '../../components/AppointmentItem/AppointmentItem';

const AppointmentsScreen = () => {
  const {authToken} = useContext(AuthState);
  const {userId} = useContext(AuthState);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data = `{\r\n   "id": ${userId}\r\n}`;
    const config = {
      method: 'get',
      url: 'http:192.168.0.185:8000/api/appointment/all',
      headers: {
        Authorization: `Bearer ${authToken.authToken}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };
    console.log(config);
    axios(config)
      .then(response => {
        console.log(response.data.data.userAppointments);
        setAppointments(response.data.data.userAppointments);
      })
      .catch(error => {
        console.log(error);
      });
  }, [authToken, userId]);

  return (
    <View style={styles.page}>
      <FlatList
        data={appointments}
        renderItem={item => <AppointmentItem item={item.item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default AppointmentsScreen;
