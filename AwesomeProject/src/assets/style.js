import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    p: {
        marginBottom: 15,
    },
    fullWidth: {
        width: '100%',
    },
});

const formStyles = StyleSheet.create({
    input: {
        width: '100%',
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 10,
        borderRadius: 5,
    },
});

export {globalStyles, formStyles};
