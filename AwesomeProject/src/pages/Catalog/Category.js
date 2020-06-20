import React from 'react';
import {SafeAreaView, Text, View, Button, FlatList} from 'react-native';
import {globalStyles} from '../../assets/style';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const CATEGORY = gql`
    query getCategoryById($id: String!) {
        categoryList(filters: {ids: {eq: $id}}) {
            name
            url_key
            image_path
            description
            products {
                items {
                    id
                    name
                    sku
                    url_key
                    description {
                        html
                    }
                    small_image {
                        url
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
    }
`;

const ProductItem = ({item, navigation}) => {
    console.log(item);

    return (
        <Button
            title={item.name}
            onPress={() =>
                navigation.navigate('Product', {
                    name: item.name,
                    id: item.id,
                })
            }
        />
    );
};

const Category = ({navigation, route: {params}}) => {
    let id = params.id;

    const {data, loading, error} = useQuery(CATEGORY, {
        variables: {id: id},
    });

    if (loading) {
        return <Text>Fetching Data...</Text>;
    }

    if (error) {
        return <Text>Unexpected error during fetching Data...</Text>;
    }

    const category = data.categoryList[0];

    return (
        <SafeAreaView style={globalStyles.SafeAreaView}>
            <View style={globalStyles.container}>
                <Text>{category.name}</Text>
                <FlatList
                    data={category.products.items}
                    renderItem={({item}) => (
                        <ProductItem item={item} navigation={navigation} />
                    )}
                    keyExtractor={(item) => item.id}
                />
                {/* <Button
                    title="Product"
                    onPress={() =>
                        navigation.navigate('Product', {name: 'Test Product'})
                    }
                /> */}
            </View>
        </SafeAreaView>
    );
};

export default Category;
