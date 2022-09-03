import {
  View,
  Text,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import styles from './styles';
import React from 'react';
import {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Profile from '../../../assets/images/default_profile.jpg';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';

const DoctorDetailScreen = ({dateAndTime}) => {
  const route = useRoute();
  const {item} = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <Image style={styles.userImg} source={Profile} />
        <Text style={styles.userName}>{item.title}</Text>
        <Text style={styles.aboutUser}>{item.bio}</Text>

        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>{item.avgRating}</Text>
            <Text style={styles.userInfoSubTitle}>Rating</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>{item.ratings}</Text>
            <Text style={styles.userInfoSubTitle}>Recenzii</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>{item.yrsExp} + </Text>
            <Text style={styles.userInfoSubTitle}>Experienta</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>{item.specialty} </Text>
            <Text style={styles.userInfoSubTitle}>Specializare</Text>
          </View>
        </View>

        <View>
          <CustomDatePicker />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorDetailScreen;
