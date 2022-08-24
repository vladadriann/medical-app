import {View, Text, Button, Image, PermissionsAndroid} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';

const AppointmentForm = () => {
  const route = useRoute();
  const {dateAndTime} = route.params;

  const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState();

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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="open Gallery" onPress={openGallery}></Button>
      <Image style={{height: 100, width: 100}} source={{uri: cameraPhoto}} />
      <Button title="Open camera" onPress={openCamera}></Button>
      <Image style={{height: 100, width: 100}} source={{uri: galleryPhoto}} />
      <Text>{JSON.stringify(dateAndTime)}</Text>
    </View>
  );
};

export default AppointmentForm;
