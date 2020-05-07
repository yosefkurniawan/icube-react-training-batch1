import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../../lib/apollo';
import ReactHtmlParser, {
    processNodes,
    convertNodeToElement,
    htmlparser2,
} from 'react-html-parser';
import Link from 'next/link';
import Price from '../../components/price';

const CATEGORY = gql`
    query getCategoryById($id: String!) {
        categoryList(filters: { ids: { eq: $id } }) {
            name
            url_key
            image_path
            description
            products {
                items {
                    id
                    name
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

const Category = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data, loading } = useQuery(CATEGORY, {variables: {id: id}})

    if(loading) {
        return <div>Loading...</div>
    }
    const category = data.categoryList[0];
    
    console.log(category);
    const pageConfig = {
        title: category.name,
        className: 'page-category'
    };

    return (
        <Layout pageConfig={pageConfig}>
            id: {id}
            <div className="category-info">
                <div className="category-banner">
                    <img src={category.image_path} alt={category.name} />
                </div>
                <div className="category-desc">
                    {ReactHtmlParser(category.description)}
                </div>
            </div>
            <div className="product-listing">
                {category.products.items.map((item) => (
                    <div className="product-item">
                        <div className="product-inner">
                            <div className="product-image">
                                <img
                                    src={item.small_image.url}
                                    alt={item.name}
                                />
                            </div>
                            <div className="product-info">
                                <div className="product-name">
                                    <Link
                                        href="/product/[url_key]"
                                        as={`/product/${item.url_key}`}
                                    >
                                        <a>{item.name}</a>
                                    </Link>
                                </div>
                                <div className="product-price">
                                    <Price priceRange={item.price_range} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default (withApollo)(Category);
