import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const CustomAppointment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={3}>
        Programare 13.07 ora 12:45
      </Text>
      <Text style={styles.text}>
        Aveti programare in data de 13.07 ora 12:45, doctor CBX, ginecologie.
      </Text>
      <Text style={styles.subTitle}>Documentul incarcat de dvs:</Text>
      <View></View>
      <Text style={styles.subTitle}>Recomandarile medicului:</Text>
      <Text style={styles.subTitle}>Documentul incarcat de medic:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  subTitle: {fontSize: 16, fontWeight: 'bold'},
  text: {fontSize: 14},
});

export default CustomAppointment;
