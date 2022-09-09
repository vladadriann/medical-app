import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import DoctorItem from '../../components/DoctorItem/DoctorItem';
import styles from './styles';
import axios from 'axios';
import {AuthState} from '../../context/AuthContext';
import {useContext} from 'react';
import {useState, useEffect} from 'react';

const DoctorsScreen = () => {
  const {authToken} = useContext(AuthState);
  const [doctors, setDoctors] = useState([]);

  console.log(authToken);

  useEffect(() => {
    const data = JSON.stringify({});
    const config = {
      method: 'get',
      url: 'http:192.168.0.102:8000/api/users/doctors',
      headers: {
        Authorization: `Bearer ${authToken.authToken}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };
    console.log(config);
    axios(config)
      .then(response => {
        setDoctors(response.data.data.doctors);
      })
      .catch(error => {
        console.log(error);
      });
  }, [authToken]);

  console.log(doctors);

  return (
    <View style={styles.page}>
      <FlatList
        data={doctors}
        renderItem={({item}) => <DoctorItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DoctorsScreen;
