import {StyleSheet} from 'react-native';
import colors from './color';

const globalStyles = StyleSheet.create({
    SafeAreaView: {
        backgroundColor: 'white',
        flex: 1,
    },
    container: {
        backgroundColor: 'white',
        padding: 15,
        flex: 1,
    },
    title: {
        fontSize: 18,
        marginBottom: 15,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.color1,
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
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 20,
        borderRadius: 5,
    },
});

export {globalStyles, formStyles};
