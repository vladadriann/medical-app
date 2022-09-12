import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {useEffect} from 'react';
import styles from './styles';
import axios from 'axios';
import {AuthState} from '../../context/AuthContext';
import {useContext} from 'react';

const SignInScreen = () => {
  const {authToken, setAuthToken} = useContext(AuthState);
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [doctorId, setDoctorId] = useState();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = data => {
    axios
      .post('http:192.168.0.185:8000/api/auth/login', {
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        console.log('Posting data', response.data.id);
        setAuthToken({authToken: response.data.token});
        setDoctorId(response.data.id);
        console.log(authToken);

        if (response.data.role === 'user') {
          navigation.navigate('Home');
        }
        if (response.data.role === 'doctor') {
          navigation.navigate('Doctor', {doctorId});
        }
        if (response.data.role === 'admin') {
          navigation.navigate('Admin');
        }
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={(styles.logo, {height: height * 0.3})}
          resizeMode="contain"
        />

        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{required: 'Email is required'}}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don`t have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
