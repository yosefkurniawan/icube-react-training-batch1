import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Image from 'react-native-scalable-image';
import {globalStyles} from '../../assets/style';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';
import ProductList from '../../components/ProductList';
import {useQuery} from '@apollo/react-hooks';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';
import SlideBanner from '../../components/slideBanner';

const SLIDE_BANNER = gql`
    {
        getHomepageSlider {
            images {
                mobile_image_url
            }
        }
    }
`;

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
                        sku
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
    // get featured categories
    const {
        data: dataCategories,
        loading: loadingCategories,
        error: errorCategories,
    } = useQuery(FEATURED_CATEGORIES);

    // get slide banners
    const {
        data: dataBanner,
        loading: loadingBanner,
        error: errorBanner,
    } = useQuery(SLIDE_BANNER);

    if (loadingCategories) {
        return <Loader />;
    }

    if (errorCategories) {
        return <Text>Unexpected error during fetching Data...</Text>;
    }

    const categories = dataCategories.categoryList[0];

    if (loadingBanner) {
        return <Loader />;
    }

    if (errorBanner) {
        return <Text>Unexpected error during fetching Data...</Text>;
    }

    const sliderBanners = [];
    dataBanner.getHomepageSlider.images.map((image) => {
        sliderBanners.push(image.mobile_image_url);
    });
    console.log(dataBanner.getHomepageSlider.images);
    console.log(sliderBanners);

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <SlideBanner images={sliderBanners} />
                {categories.children.map((cat) => {
                    return (
                        <View key={cat.id} style={styles.sectionContainer}>
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
        </SafeAreaView>
    );
};

export default Home;
