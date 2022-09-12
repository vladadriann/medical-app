import {View, StyleSheet, FlatList, Text} from 'react-native';
import React from 'react';
import CustomAppointment from '../../components/CustomAppointment/CustomAppointment';
import styles from './styles';
import axios from 'axios';
import {AuthState} from '../../context/AuthContext';
import {useContext} from 'react';
import {useState, useEffect} from 'react';

const DoctorPage = ({doctorId}) => {
  const {authToken} = useContext(AuthState);
  const [doctorAppointments, setDoctorAppointments] = useState();

  var data = `{\r\n ${doctorId}  \r\n}`;

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http:192.168.0.185:8000/api/appointment/doctorappointments',
      headers: {
        Authorization: `Bearer ${authToken.authToken}`,
        'Content-Type': 'text/plain',
        Cookie: `accessToken=${authToken.authToken}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data.doctorAppointments));
        setDoctorAppointments(response.data.data.doctorAppointments);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [authToken]);

  return (
    <View style={styles.page}>
      {doctorAppointments ? (
        <FlatList
          data={doctorAppointments}
          renderItem={item => <CustomAppointment item={item.item} />}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text> Nu exista programari</Text>
      )}
    </View>
  );
};

export default DoctorPage;
