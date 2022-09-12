import {View, Text, Image, Test} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

const AppointmentItem = props => {
  const {item} = props;
  console.log(item);

  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={3}>
        {'PROGRAMARE:'}
      </Text>
      <Text style={styles.text}>
        {`Programare in data de  ${item.appointmentDate} la ora ${item.appointmentHour}.`}
      </Text>
      <Text style={styles.subTitle}>Descirerea simptomelor pacientului:</Text>
      <Text style={styles.text}>{`${item.observations}`}</Text>
      <Text style={styles.subTitle}>Documentul incarcat de pacient:</Text>
      <View>
        <Image style={{height: 100, width: 100}} />
      </View>
      <Text style={styles.subTitle}>Recomandarile medicului:</Text>
      {item.doctorObservations ? (
        <Text style={styles.text}> {`${item.doctorObservations}`}</Text>
      ) : (
        <Text>Nu exista recomandare</Text>
      )}

      <Text style={styles.subTitle}>Documentul incarcat de medic: </Text>
      <View>
        <Image style={{height: 100, width: 100}} />
      </View>
      <Text style={styles.subTitle}>
        Status programare: {`${item.accepted}`}{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
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

export default AppointmentItem;
