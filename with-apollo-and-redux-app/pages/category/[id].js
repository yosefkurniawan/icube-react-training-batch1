import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../../lib/apollo';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';
import Price from '../../components/price';
import { Skeleton } from '@material-ui/lab';

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

const Category = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data, loading } = useQuery(CATEGORY, {
        variables: { id: id },
        fetchPolicy: 'network-only',
    });

    const pageConfig = {
        title: 'Category Page',
        className: 'page-category',
    };

    if(loading) {
        return  (
            <Layout pageConfig={pageConfig}>
                <CategorySkeleton />
            </Layout>
        )
    }
    const category = data.categoryList[0];

    pageConfig.title = category.name;
    
    return (
        <Layout pageConfig={pageConfig}>
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
                    <div className="product-item" key={item.sku}>
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


const CategorySkeleton = () => {
    const items = [1,2,3,4];
    return (
        <>
            <div className="category-info">
                <Skeleton animation="wave" variant="rect" height={300} />
                <br />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
            </div>
            <br />
            <div className="product-listing">
                {items.map((item) => (
                    <div className="product-item" key={item}>
                        <div className="product-image">
                            <Skeleton
                                animation="wave"
                                variant="rect"
                                height={170}
                            />
                        </div>
                        <div className="product-info">
                            <div className="product-name">
                                <Skeleton animation="wave" />
                            </div>
                            <div className="product-price">
                                <Skeleton animation="wave" width={50} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default (withApollo)(Category);
