import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import {launchCamera} from 'react-native-image-picker';
import axios from 'axios';
import {useState} from 'react';
import {useContext} from 'react';
import {AuthState} from '../../context/AuthContext';

const AppointmentConfirm = () => {
  const {authToken} = useContext(AuthState);
  const [cameraPhoto, setCameraPhoto] = useState('');
  const [doctorObservations, setDoctorObservations] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;

  // let seen = [];

  // const replacer = (key, val) => {
  //   if (val != null && typeof val == 'object') {
  //     if (seen.indexOf(val) >= 0) {
  //       return;
  //     }
  //     seen.push(val);
  //   }
  //   return val;
  // };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }
  };

  const goToDoctorPage = () => {
    const data = JSON.stringify({
      id: `${item._id}`,
      doctorObservations: `${doctorObservations}`,
      doctorObservationsImage: '',
      accepted: true,
    });

    const config = {
      method: 'post',
      url: 'http:192.168.0.185:8000/api/appointment/update',
      headers: {
        Authorization: `Bearer ${authToken.authToken}`,
        Cookie: `accessToken=${authToken.authToken}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(`Posting ${item}`);
        console.log(JSON.stringify(response.data));
        navigation.navigate('Doctor');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Acceptati/refuzati programarea</Text>
      <Text style={styles.text}>
        {`Programare in data de ${item.appointmentDate}  la ora ${item.appointmentHour}.`}
      </Text>
      <Text style={styles.subTitle}>Descirerea simptomelor pacientului:</Text>
      <Text style={styles.text}>{`${item.observations}`}</Text>
      <Text style={styles.subTitle}>Documentul incarcat de pacient:</Text>
      <Text>Completati cu recomandari:</Text>
      <View style={styles.container}>
        <TextInput
          value={doctorObservations}
          onChange={text => setDoctorObservations(text)}
          placeholder="..."
          style={styles.input}
        />
      </View>
      <Text>Atasati documente:</Text>
      <CustomButton text="Deschideti camera" onPress={openCamera} />
      <CustomButton text="Salvati datele introduse!" onPress={goToDoctorPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 50,
  },
  text: {fontSize: 14},
  subTitle: {fontSize: 16, fontWeight: 'bold'},
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
    height: 50,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
  },
  input: {},
});

export default AppointmentConfirm;
