import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {globalStyles} from '../../assets/style';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

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
    console.log(params);
    let sku = params.sku;
    console.log(sku);
    const {loading, data, error} = useQuery(PRODUCT, {
        variables: {sku: sku},
    });

    if (loading) {
        return <Text>Fetching Data...</Text>;
    }

    if (error) {
        return <Text>Unexpected error during fetching Data...</Text>;
    }

    const product = data.products.items[0];

    return (
        <SafeAreaView style={globalStyles.SafeAreaView}>
            <View style={globalStyles.container}>
                <Text>Product Title: {product.name}</Text>
                <Button onPress={() => goBack()} title="Back" />
            </View>
        </SafeAreaView>
    );
};

export default Product;
