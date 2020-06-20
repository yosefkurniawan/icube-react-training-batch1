import {StyleSheet} from 'react-native';
import colors from '../../assets/color';

const style = StyleSheet.create({
    item: {
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: colors.color1,
        borderBottomWidth: 1,
        minHeight: 80,
        justifyContent: 'center',
    },
    date: {
        fontSize: 10,
        marginBottom: 10,
    },
    subject: {
        marginBottom: 10,
        fontWeight: 'bold',
    },
});

export default style;
