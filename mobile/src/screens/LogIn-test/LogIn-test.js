import {View, Button, StyleSheet, TextInput} from 'react-native';
import React, {useCallback} from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

const AppointmentsScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  {
    /** const accessToken =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzBkNmZiZjA1ZmIzMWZmNzg5Y2U2M2UiLCJpYXQiOjE2NjE5MzMzNTgsImV4cCI6MTY2MTkzNDI1OH0.iympe888EiATQ7rv7SNQhiYwM54xzWGSuRgSUXaq2l7Wm9etqbMlgvVmhJegLRMQCKBGuuF4_7xxU-VeB6PzJg';
  const apiUrl = 'http:192.168.0.185:8000/api';*/
  }
  {
    /*const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }); */
  }

  const onChangeEmail = email => {
    setEmail(email);
  };

  const onChangePassword = password => {
    setPassword(password);
  };

  const postData = () => {
    axios
      .post('http:192.168.0.185:8000/api/auth/login', {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log('Posting data', response);
        console.log(response.data.accessToken);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  {
    /*const getData = useCallback(async () => {
    try {
      const result = await authAxios.get(`/users/me`);
      console.log(result.data);
    } catch (err) {
      console.log(err.message);
    }
  }); */
  }

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          value={email}
          onChangeText={onChangeEmail}
          placeholder="email"
          style={styles.input}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          value={password}
          onChangeText={onChangePassword}
          placeholder="password"
          style={styles.input}
        />
      </View>

      <Button onPress={postData} title="Log In" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 50,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    padding: 20,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 75,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
  },
  input: {},
});

export default AppointmentsScreen;
