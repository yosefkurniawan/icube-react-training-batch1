import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {globalStyles} from '../../assets/style';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';
import ProductList from '../../components/ProductList';

const CATEGORY = gql`
    query getCategoryById($id: String!) {
        categoryList(filters: {ids: {eq: $id}}) {
            name
            url_key
            image_path
            description
            products(pageSize: 10) {
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

const Category = ({navigation, route: {params}}) => {
    let id = params.id;

    const {data, loading, error} = useQuery(CATEGORY, {
        variables: {id: id},
    });

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <Text>Unexpected error during fetching Data...</Text>;
    }

    const category = data.categoryList[0];

    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>{category.name}</Text>
            <ProductList
                data={category.products.items}
                navigation={navigation}
            />
        </ScrollView>
    );
};

export default Category;
