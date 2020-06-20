import React from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';
import {globalStyles} from '../../assets/style';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';
import PrimaryButton from '../../components/primaryButton';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CATEGORIES_QUERY = gql`
    {
        categoryList {
            children {
                id
                name
            }
        }
    }
`;

const CategoryItem = ({item, navigation}) => {
    return (
        <TouchableOpacity
            style={globalStyles.fullWidth}
            onPress={() =>
                navigation.navigate('Category', {
                    title: item.name,
                    id: item.id,
                })
            }>
            <PrimaryButton label={item.name} />
        </TouchableOpacity>
    );
};

const Catalog = ({navigation}) => {
    const {loading, data, error} = useQuery(CATEGORIES_QUERY);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <Text>Unexpected error during fetching Data...</Text>;
    }

    const categories = data.categoryList[0].children;

    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>Shop by Category</Text>
            <FlatList
                data={categories}
                renderItem={({item}) => (
                    <CategoryItem item={item} navigation={navigation} />
                )}
                keyExtractor={(item) => item.id}
            />
        </ScrollView>
    );
};

export default Catalog;
