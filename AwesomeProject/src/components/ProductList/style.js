import {StyleSheet} from 'react-native';
import colors from '../../assets/color';

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        margin: 1,
        padding: 5,
        // borderColor: colors.color1,
        // borderWidth: 1,
        minHeight: 350,
        marginBottom: 20,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        // backgroundColor: '#f0f0f0',
        marginBottom: 15,
    },
    itemImage: {},
    itemAction: {
        marginTop: 15,
    },
});

export default style;
