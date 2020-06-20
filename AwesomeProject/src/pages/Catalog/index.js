import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Button,
    FlatList,
    ScrollView,
} from 'react-native';
import {globalStyles} from '../../assets/style';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

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
        <Button
            title={item.name}
            onPress={() =>
                navigation.navigate('Category', {
                    title: item.name,
                    id: item.id,
                })
            }
        />
    );
};

const Catalog = ({navigation}) => {
    const {loading, data, error} = useQuery(CATEGORIES_QUERY);

    if (loading) {
        return <Text>Fetching data...</Text>;
    }

    if (error) {
        return <Text>Unexpected error during fetching Data...</Text>;
    }

    const categories = data.categoryList[0].children;
    console.log(categories);

    return (
        <SafeAreaView style={globalStyles.SafeAreaView}>
            <ScrollView>
                <View style={globalStyles.container}>
                    <Text>Category List:</Text>
                    <FlatList
                        data={categories}
                        renderItem={({item}) => (
                            <CategoryItem item={item} navigation={navigation} />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Catalog;
