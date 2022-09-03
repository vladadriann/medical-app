import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import styles from './styles';

const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onConfirmPressed = data => {
    console.warn(data);
    navigation.navigate('Home');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onResendPressed = () => {
    console.warn('onResendPressed');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code"
          onPress={onResendPressed}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
