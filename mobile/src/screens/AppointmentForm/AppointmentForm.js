import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  TextInput,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const AppointmentForm = () => {
  const route = useRoute();
  const {dateAndTime} = route.params;

  const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState();
  const [value, setValue] = useState('');

  const options = {
    title: 'Select Image',
    type: 'library',
    saveToPhotos: true,
    options: {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setGalleryPhoto(result.assets[0].uri);
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Finalizati programarea</Text>
      <Text>Scurta descriere a simptomelor:</Text>
      <View style={styles.container}>
        <TextInput
          value={value}
          onChange={setValue}
          placeholder=""
          style={styles.input}
        />
      </View>
      <Text>Atasati documente:</Text>
      <CustomButton
        text="Deschideti galeria"
        onPress={openGallery}></CustomButton>
      {/* <Image style={{height: 100, width: 100}} source={{uri: cameraPhoto}} />*/}
      <CustomButton
        text="Deschideti camera"
        onPress={openCamera}></CustomButton>
      {/*<Image style={{height: 100, width: 100}} source={{uri: galleryPhoto}} />*/}
      <Text>
        Doriti sa va programati pe data de: {''}
        {dateAndTime.getDate()}.{dateAndTime.getMonth()} la ora{' '}
        {dateAndTime.getHours()}:{dateAndTime.getMinutes()}
      </Text>
    </View>
  );
};

export default AppointmentForm;
