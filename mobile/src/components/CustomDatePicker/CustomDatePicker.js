import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useState} from 'react';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';

const CustomDatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateAndTime, setDateAndTime] = useState(new Date());
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
    hideDatePicker();
    console.warn('A date has been picked: ', dateAndTime);
    goToAppointmentForm();
  };

  const goToAppointmentForm = () => {
    navigation.navigate('Appointment', {dateAndTime});
  };

  const selectAppointmentPressed = () => {
    showDatePicker();
  };

  return (
    <View>
      <CustomButton text="Programeaza-te" onPress={showDatePicker} />

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
