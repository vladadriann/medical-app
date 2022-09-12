import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import styles from './styles';
import Profile from '../../../assets/images/default_profile.jpg';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import CustomButton from '../CustomButton';
import {AuthState} from '../../context/AuthContext';
import axios from 'axios';

const UserItem = props => {
  const {authToken} = useContext(AuthState);
  const {item, setRequireRefresh} = props;
  console.log(item._id);
  console.log(authToken);
  const getUserId = () => {
    const data = JSON.stringify({
      id: item._id,
    });

    const config = {
      method: 'post',
      url: 'http:192.168.0.185:8000/api/users/delete',
      headers: {
        Authorization: `Bearer ${authToken.authToken}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };
    console.log(config);
    axios(config)
      .then(response => {
        console.log(response);
        console.warn(item._id);
        setRequireRefresh(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={Profile} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={2}>
          Utilizator:{item.fullName}
        </Text>
        <Text style={styles.specialty}>Rol: {item.role}</Text>
        <CustomButton text="Delete User" onPress={getUserId} />
      </View>
    </View>
  );
};

export default UserItem;
