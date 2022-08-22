import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useState} from 'react';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';

const CustomDatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateAndTime, setDateAndTime] = useState(0);
  const navigation = useNavigation();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    //console.warn('A date has been picked: ', date);
    setDateAndTime(date);
    //console.warn(dateAndTime);
    hideDatePicker();
  };

  const goToAppointmentForm = () => {
    navigation.navigate('Appointment', {dateAndTime});
  };

  const appointmentPressed = () => {
    showDatePicker();
    if (dateAndTime !== 0) {
      goToAppointmentForm();
    }
  };

  return (
    <View>
      <CustomButton
        //type="PRIMARY"
        text="Programeaza-te"
        onPress={appointmentPressed}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default CustomDatePicker;
