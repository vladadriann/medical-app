import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import ImageCarousel from '../../components/ImageCarousel';
import images from '../../../assets/images/carousel-images';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>Clinica SANADOR</Text>
      {/* Image carousel */}
      <ImageCarousel images={images.images} />
      <Text style={styles.description}>
        In Clinica SANADOR Victoriei acoperim o gama larga de servicii medicale
        complexe: consultatii pentru toate specialitatile medicale, ecografii
        (inclusiv cu substanta de contrast, Sonoelastografia hepatica/splenica
        si eco cord la copii), explorari functionale (EKG de repaus/efort, EEG,
        EMG, montare holter EKG/TA, audiometrie, spirometrie simpla/cu test
        bronhodilatator), servicii de stomatologie si radiologie dentara,
        medicina muncii, analize medicale de laborator si vaccinari. Clinica
        SANADOR Victoriei este dotata cu tehnologie ultra-moderna. Departamentul
        de Imagistica Medicala dispune de două echipamente RMN (RMN Siemens
        Magnetom Avanto Tclass 76X 32 si RMN Philips Achieva dSTREAM),
        tomografie computerizata Siemens (Somatom Go UP), radiologie digitala
        Philips (Digital Diagnost C50), mamografie digitala 3D (cu tomosinteza),
        osteodensitometrie GE Prodigy, radiologie dentara panoramica
        (Orthopantomograph OP2D) si radiologie dentara intraorala
        (PlanmecaProX). Clinica SANADOR Victoriei are in componenta si
        Departamentul de Pediatrie SANADOR - SANADOR Baby -, cu intrare separata
        de cea a pacientilor adulti, receptie proprie, cabinete de pediatrie
        dotate la cele mai inalte standarde, sala de recoltare analize medicale
        adaptata copiilor, pentru a deservi cat mai bine necesitatile medicale
        ale celor mici.
      </Text>
    </ScrollView>
  );
};

export default HomeScreen;
