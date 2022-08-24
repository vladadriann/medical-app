import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import ImageCarousel from '../../components/ImageCarousel';
import images from '../../../assets/images/carousel-images';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>Clinica Metropolitan Health</Text>
      {/* Image carousel */}
      <ImageCarousel images={images.images} />
      <Text style={styles.description}>
        In Clinica Metropolitan Health acoperim o gama larga de servicii
        medicale complexe: consultatii pentru toate specialitatile medicale,
        ecografii , explorari functionale , servicii de medicina muncii, analize
        medicale de laborator. Clinica este dotata cu tehnologie ultra-moderna.
      </Text>

      <View style={styles.contact}>
        <Icon name="place" size={15} color="grey" />
        <Text>Bd. Prel. Ghencea, nr 24, Bucuresti </Text>
      </View>

      <View style={styles.contact}>
        <Icon name="phone" size={15} color="grey" />
        <Text>0731072100</Text>
      </View>
      <View style={styles.contact}>
        <Icon name="schedule" size={15} color="grey" />
        <Text>9:00 - 20:00 </Text>
      </View>
      <View style={styles.contact}>
        <Icon name="directions-bus" size={15} color="grey" />
        <Text>122, 368, 105</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
