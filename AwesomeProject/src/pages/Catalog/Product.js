import React from 'react';
import {TouchableOpacity, Text, View, ScrollView} from 'react-native';
import {globalStyles} from '../../assets/style';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import PrimaryButton from '../../components/primaryButton';
import Image from 'react-native-scalable-image';
import {productStyle} from './style';
import Loader from '../../components/Loader';

const PRODUCT = gql`
    query getProduct($sku: String!) {
        products(filter: {sku: {eq: $sku}}) {
            items {
                name
                sku
                stock_status
                description {
                    html
                }
                image {
                    url
                    label
                }
                price_range {
                    minimum_price {
                        regular_price {
                            currency
                            value
                        }
                        final_price {
                            currency
                            value
                        }
                    }
                }
            }
        }
    }
`;

const Product = ({navigation: {goBack}, route: {params}}) => {
    let sku = params.sku;
    const {loading, data, error} = useQuery(PRODUCT, {
        variables: {sku: sku},
    });

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <Text>Unexpected error during fetching Data...</Text>;
    }

    const product = data.products.items[0];

    return (
        <ScrollView style={globalStyles.container}>
            <View style={productStyle.itemImageContainer}>
                <Image
                    width={400}
                    source={{
                        uri: product.image.url,
                    }}
                />
            </View>
            <Text style={globalStyles.title}>{product.name}</Text>
            <Text>
                {product.price_range.minimum_price.final_price.currency}{' '}
                {product.price_range.minimum_price.final_price.value}
            </Text>
            <TouchableOpacity
                style={productStyle.action}
                onPress={() => goBack()}>
                <PrimaryButton label={'Back'} />
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Product;
