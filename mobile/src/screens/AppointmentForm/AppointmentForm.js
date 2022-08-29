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

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 50,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    padding: 20,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 125,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
  },
  input: {},
});

export default AppointmentForm;
