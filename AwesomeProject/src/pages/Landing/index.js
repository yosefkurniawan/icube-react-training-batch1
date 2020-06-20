import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity, Image} from 'react-native';
import {globalStyles} from '../../assets/style';
import {getItem} from '../../helpers/localStorage';
import AUTH_ACTION from '../../stores/actions/auth';
import {connect} from 'react-redux';
import Loader from '../../components/Loader';
import PrimaryButton from '../../components/primaryButton';
import style from './style';

const Landing = ({navigation, signIn}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log('Landing page: check auth');
        getItem('token').then((value) => {
            console.log(value);
            if (value) {
                navigation.navigate('Main');

                let dataFormat = {
                    type: 'signin',
                    token: value,
                };
                signIn(dataFormat);
            }
            setLoading(false);
        });
    }, [navigation, signIn]);

    if (loading) {
        return <Loader />;
    }
    return (
        <View style={globalStyles.container}>
            <View style={style.container}>
                <View style={style.logoContainer}>
                    <Image
                        style={style.logo}
                        source={{
                            uri:
                                'https://images.squarespace-cdn.com/content/v1/5d006e3f78e79400019df4bb/1560840159238-XOK8PKD76HLY9WUIACOD/ke17ZwdGBToddI8pDm48kJu9Ez45NHhonUzr23cpyN4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcNoZUZ-JAao5jPb7wvtzTF7gT_9eUasGaNsq72a5SjxNlIFuq8XdHzLjyp9BuHsfD/image-mobile.png',
                        }}
                    />
                </View>
                <Text style={style.title}>Hi, please Login to access!</Text>
                <TouchableOpacity
                    style={globalStyles.fullWidth}
                    onPress={() => navigation.navigate('Login')}>
                    <PrimaryButton label={'Login'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const mapDispatchToProps = (dispatch) => ({
    signIn: (data) => dispatch(AUTH_ACTION.set(data)),
});

export default connect(null, mapDispatchToProps)(Landing);
