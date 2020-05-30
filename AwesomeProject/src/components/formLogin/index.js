import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './style';
import {globalStyles, formStyles} from '../../assets/style';

const FormLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>Login</Text>
      <TextInput label="Email" style={formStyles.input} />
      <TextInput
        label="Password"
        secureTextEntry={true}
        style={formStyles.input}
      />
      <Button title={'Login'} color="red" />
    </View>
  );
};

export default FormLogin;
