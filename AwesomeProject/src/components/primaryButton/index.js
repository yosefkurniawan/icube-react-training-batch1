import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import colors from '../../assets/color';

const style = StyleSheet.create({
    button: {
        width: '100%',
        height: 40,
        padding: 7,
        textAlign: 'center',
        backgroundColor: colors.color1,
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontSize: 16,
        textTransform: 'uppercase',
    },
});

const PrimaryButton = ({label}) => {
    return <Text style={style.button}>{label}</Text>;
};

export default PrimaryButton;
