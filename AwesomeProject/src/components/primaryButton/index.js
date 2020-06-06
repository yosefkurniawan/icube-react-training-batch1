import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    button: {
        width: '100%',
        height: 45,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'green',
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        color: 'white',
    },
});

const PrimaryButton = ({label}) => {
    return <Text style={style.button}>{label}</Text>;
};

export default PrimaryButton;
