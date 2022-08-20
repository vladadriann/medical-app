import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import DoctorItem from '../../components/DoctorItem/DoctorItem';
import doctors from '../../data/doctors';

const DoctorsScreen = () => {
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

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default DoctorsScreen;
