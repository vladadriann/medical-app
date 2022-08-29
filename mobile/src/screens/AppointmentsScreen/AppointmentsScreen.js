import {View, Button} from 'react-native';
import React from 'react';
import axios from 'axios';

const AppointmentsScreen = () => {
  const callApi = () => {
    axios
      .get('https://api.publicapis.org/entries')
      .then(function (response) {
        console.log('response=>', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const alert = () => console.warn('Its working');

  return (
    <View>
      <Button onPress={() => callApi()} title="Make api call" />
    </View>
  );
};

export default AppointmentsScreen;
