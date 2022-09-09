import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const CustomAppointment = ({cameraPhoto, value, dateAndTime}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={3}>
        {` ${dateAndTime.getDate()}.${dateAndTime.getMonth()} ora ${dateAndTime.getHours()}:${dateAndTime.getMinutes()}`}
      </Text>
      <Text style={styles.text}>
        {`Aveti programare in data de  ${dateAndTime.getDate()}.${dateAndTime.getMonth()} la ora ${dateAndTime.getHours()}:${dateAndTime.getMinutes()}.`}
      </Text>
      <Text style={styles.subTitle}>Descirerea simptomelor:</Text>
      <Text style={styles.text}>{`${value}`}</Text>
      <Text style={styles.subTitle}>Documentul incarcat de dvs:</Text>
      <View>
        <Image style={{height: 100, width: 100}} source={{uri: cameraPhoto}} />
      </View>
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
