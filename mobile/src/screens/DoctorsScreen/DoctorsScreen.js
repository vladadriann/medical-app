import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';

const DoctorsScreen = () => {
  const [doctors, setDoctors] = useState([
    {name: 'Dr. David Achim ', specialty: 'Chirurgie toracică', id: '1'},
    {name: ' Dr. Fares Ad ', specialty: 'Urologie', id: '2'},
    {
      name: 'Dr. Ruxandra Albu ',
      specialty: 'Obstetrică',
      id: '3',
    },
    {name: 'Dr. Marilena Alexandru ', specialty: 'Medicină generală', id: '4'},
    {name: 'Dr. Mihai Alexe ', specialty: 'Pneumologie', id: '5'},
    {name: 'Dr. Hasan Al Kawaz ', specialty: 'Radiologie', id: '6'},
    {name: 'Dr. Adriana Alexandrescu ', specialty: 'Cardiologie', id: '7'},
  ]);

  const pressHandler = id => {
    console.warn(id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={doctors}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(doctors.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: '#06c4b1',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});

export default DoctorsScreen;
