import {View, Text, PermissionsAndroid, TextInput} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {AuthState} from '../../context/AuthContext';
import {useContext, useEffect} from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const {authToken} = useContext(AuthState);
  const route = useRoute();
  const {dateAndTime} = route.params;

  const navigation = useNavigation();

  const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState();
  const [details, setDetails] = useState('');
  const [appointmentDate, setAppointmentDate] = useState(new Date(dateAndTime));

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

  {
    /* axios
      .post(
        'http:192.168.0.102:8000/api/appointment/create',
        {
          appointmentData: dateAndTime.getDate(),
          appointmentHour: dateAndTime.getHours(),
          observations: value,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken.authToken}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(function (response) {
        console.log('Posting data', response.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, [authToken]);*/
  }

  const goToAppointments = () => {
    console.warn(details);
    axios
      .post(
        'http:192.168.0.102:8000/api/appointment/create',
        JSON.stringify({
          appointmentData: `${appointmentDate.getDate()}`,
          appointmentHour: `${appointmentDate.getHours()}`,
          observations: details,
        }),
        {
          headers: {
            Authorization: `Bearer ${authToken.authToken}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(function (response) {
        navigation.navigate(`Appointments`, {
          cameraPhoto,
          dateAndTime,
          details,
        });
        console.log('Posting data', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Finalizati programarea</Text>
      <Text>Scurta descriere a simptomelor:</Text>
      <View style={styles.container}>
        <TextInput
          value={details}
          onChange={text => setDetails(text)}
          placeholder="..."
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
        Doriti sa va programati pe data de:
        {appointmentDate.getDate()}.{appointmentDate.getMonth()} la ora{' '}
        {appointmentDate.getHours()}:{appointmentDate.getMinutes()}
      </Text>
      <CustomButton
        text="Apasati pentru finalizare!"
        onPress={goToAppointments}></CustomButton>
    </View>
  );
};

export default AppointmentForm;
