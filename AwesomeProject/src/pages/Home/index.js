import React from 'react';
import {Text, View} from 'react-native';
import Image from 'react-native-scalable-image';
import {globalStyles} from '../../assets/style';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';
import ProductList from '../../components/ProductList';
import {useQuery} from '@apollo/react-hooks';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';

const FEATURED_CATEGORIES = gql`
    {
        categoryList(filters: {url_key: {eq: "homepage-featured-products"}}) {
            children {
                id
                name
                image_path
                products(pageSize: 2) {
                    items {
                        id
                        name
                        url_key
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
    }
`;

const Home = ({navigation}) => {
    const {data, loading, error} = useQuery(FEATURED_CATEGORIES);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <Text>Unexpected error during fetching Data...</Text>;
    }

    const categories = data.categoryList[0];

    return (
        <ScrollView style={globalStyles.container}>
            {categories.children.map((cat) => {
                return (
                    <View key={cat.id}>
                        <Text style={globalStyles.title}>{cat.name}</Text>
                        {cat.image_path ? (
                            <View style={styles.bannerWrapper}>
                                <Image
                                    width={400}
                                    source={{
                                        uri: cat.image_path,
                                    }}
                                />
                            </View>
                        ) : null}

                        <ProductList
                            data={cat.products.items}
                            navigation={navigation}
                        />
                    </View>
                );
            })}
        </ScrollView>
    );
};

export default Home;
