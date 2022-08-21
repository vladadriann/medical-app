import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import styles from './styles';
import doctors from '../../data/doctors';
import Profile from '../../../assets/images/default_profile.jpg';
import {useNavigation} from '@react-navigation/native';

const DoctorItem = props => {
  const {item} = props;
  const navigation = useNavigation();

  const goToDoctorDetail = () => {
    navigation.navigate('DoctorDetail', {item});
  };

  return (
    <Pressable onPress={goToDoctorDetail} style={styles.root}>
      <Image style={styles.image} source={Profile} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.specialty}>Specialitate: {item.specialty}</Text>
        {/*Ratings*/}
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${item.id}-${i}`}
              style={styles.star}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#e47911'}
            />
          ))}

          <Text>{doctors.ratings}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default DoctorItem;
