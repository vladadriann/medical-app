import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useState} from 'react';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';

const CustomDatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateAndTime, setDateAndTime] = useState();
  const navigation = useNavigation();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setDateAndTime(date.toLocaleString());
    hideDatePicker();
  };

  const goToAppointmentForm = () => {
    navigation.navigate('Appointment', {dateAndTime});
  };

  return (
    <View>
      <CustomButton text="Alegeti data si ora" onPress={showDatePicker} />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <CustomButton
        onPress={() => goToAppointmentForm()}
        text="Continuati catre formularul de programare"
      />
    </View>
  );
};

export default CustomDatePicker;
