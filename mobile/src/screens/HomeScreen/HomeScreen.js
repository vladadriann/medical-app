import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import ImageCarousel from '../../components/ImageCarousel';
import images from '../../../assets/images/carousel-images';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Clinica SANADOR</Text>
      {/* Image carousel */}
      <ImageCarousel images={images.images} />
      <Text style={styles.description}>
        In Clinica SANADOR acoperim o gama larga de servicii medicale complexe:
        consultatii pentru toate specialitatile medicale, ecografii (inclusiv cu
        substanta de contrast, Sonoelastografia hepatica/splenica si eco cord la
        copii), explorari functionale (EKG de repaus/efort, EEG, EMG, montare
        holter EKG/TA, audiometrie, spirometrie simpla/cu test bronhodilatator),
        servicii de stomatologie si radiologie dentara, medicina muncii, analize
        medicale de laborator si vaccinari.
      </Text>
    </View>
  );
};

export default HomeScreen;
