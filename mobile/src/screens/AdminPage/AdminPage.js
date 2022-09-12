import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import UserItem from '../../components/UserItem/UserItem';
import axios from 'axios';
import styles from './styles';
import {AuthState} from '../../context/AuthContext';
import {useContext} from 'react';
import {useState, useEffect} from 'react';
import {addSeconds} from 'date-fns';

const AdminPage = () => {
  const {authToken} = useContext(AuthState);
  const [users, setUsers] = useState([]);

  console.log(authToken);
  const [requireRefresh, setRequireRefresh] = useState(false);

  useEffect(() => {
    const data = JSON.stringify({});
    const config = {
      method: 'get',
      url: 'http:192.168.0.185:8000/api/users',
      headers: {
        Authorization: `Bearer ${authToken.authToken}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };
    console.log(config);
    axios(config)
      .then(response => {
        console.log(response.data.data.users);
        setUsers(response.data.data.users);
      })
      .catch(error => {
        console.log(error);
      });
  }, [authToken, requireRefresh]);

  return (
    <View style={styles.page}>
      <FlatList
        data={users}
        renderItem={item => (
          <UserItem item={item.item} setRequireRefresh={setRequireRefresh} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default AdminPage;
