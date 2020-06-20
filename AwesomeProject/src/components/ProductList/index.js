import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import style from './style';
import PrimaryButton from '../primaryButton';

const ProductItem = ({item, navigation}) => {
    return (
        <View style={style.item}>
            <View style={style.itemImageContainer}>
                <Image
                    width={180}
                    source={{
                        uri: item.small_image.url,
                    }}
                    style={style.itemImage}
                />
            </View>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Product', {
                        name: item.name,
                        sku: item.sku,
                    })
                }>
                <Text style={style.itemTitle}>{item.name}</Text>
            </TouchableOpacity>
            <Text>
                {item.price_range.minimum_price.final_price.currency}{' '}
                {item.price_range.minimum_price.final_price.value}
            </Text>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Product', {
                        name: item.name,
                        sku: item.sku,
                    })
                }
                style={style.itemAction}>
                <PrimaryButton label={'Detail'} />
            </TouchableOpacity>
        </View>
    );
};

const ProductList = ({navigation, data}) => {
    return (
        <FlatList
            data={data}
            renderItem={({item}) => (
                <ProductItem item={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
            numColumns="2"
            showsVerticalScrollIndicator={false}
        />
    );
};

export default ProductList;
