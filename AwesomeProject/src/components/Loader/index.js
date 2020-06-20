import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import colors from '../../assets/color';

export default function Loader() {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={colors.color1} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
