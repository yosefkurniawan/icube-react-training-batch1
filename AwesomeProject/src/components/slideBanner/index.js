import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import style from './style';
import {View} from 'react-native';

const SlideBanner = ({images}) => {
    return (
        <View style={style.sliderContainer} autoplay circleLoop>
            <SliderBox images={images} />
        </View>
    );
};

export default SlideBanner;
