import {View, Button, StyleSheet, TextInput} from 'react-native';
import React from 'react';
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

  const onChangeFirstName = firstName => {
    setFirstName(firstName);
  };
  const onChangeLastName = lastName => {
    setLastName(lastName);
  };
  const onChangeEmail = email => {
    setEmail(email);
  };
  const onChangeSex = email => {
    setSex(email);
  };
  const onChangeAge = age => {
    setAge(age);
  };
  const onChangeAddress = address => {
    setAddress(address);
  };
  const onChangePassword = password => {
    setPassword(password);
  };
  const onChangePasswordConfirm = passwordConfirm => {
    setPasswordConfirm(passwordConfirm);
  };

  const warn = () => {
    console.log([firstName, lastName, sex, age]);
  };

  const postData = () => {
    axios
      .post('http:192.168.0.185:8000/api/auth/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        sex: sex,
        age: age,
        address: address,
        password: password,
        passwordConfirm: passwordConfirm,
      })
      .then(function (response) {
        console.log('Posting data', response);
      })
      .catch(function (error) {
        console.log(error.response.request._response);
      });
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder="firstName"
          style={styles.input}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder="lastName"
          style={styles.input}
        />
      </View>
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
          value={sex}
          onChangeText={onChangeSex}
          placeholder="sex"
          style={styles.input}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          value={age}
          onChangeText={onChangeAge}
          placeholder="age"
          style={styles.input}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          value={address}
          onChangeText={onChangeAddress}
          placeholder="address"
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
      <View style={styles.container}>
        <TextInput
          value={passwordConfirm}
          onChangeText={onChangePasswordConfirm}
          placeholder="passwordConfirm"
          style={styles.input}
        />
      </View>

      <Button onPress={warn} title="Warn" />
      <Button onPress={postData} title="Submit" />
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
