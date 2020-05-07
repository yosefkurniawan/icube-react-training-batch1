import { useState } from 'react';
import { useRouter } from "next/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { withApollo } from '../../lib/apollo';
import { withRedux } from '../../lib/redux';
import Layout from "../../components/layout";
import Price from "../../components/price";
import ReactHtmlParser from 'react-html-parser';
import { useDispatch } from 'react-redux';
import { compose } from 'redux';
import { addToCart } from '../../redux/actionCart';
import { Skeleton } from '@material-ui/lab';

const PRODUCT = gql`
    query getProduct($urlKey: String!) {
        products(filter: { url_key: { eq: $urlKey } }) {
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

const Pdp = () => {
    const [qty, setQty] = useState();
    const dispatch = useDispatch();
    const router = useRouter();
    const { url_key } = router.query;
    const { loading, data } = useQuery(PRODUCT, {variables: {urlKey: url_key}})

    const pageConfig = {
        title: 'PDP',
        className: 'page-product',
    };

    if (loading) {
        return (
            <Layout pageConfig={pageConfig}>
                <PDPSkeleton />
            </Layout>
        );
    }
    
    const product = data.products.items[0];
    pageConfig.title = product.name;

    const handleChangeQty = (e) => {
        setQty(e.target.value);
    }

    const handleAddToCart = (e) => {
        e.preventDefault();
        
        const item = {
            sku: product.sku,
            name: product.name,
            image: product.image.url,
            qty: qty,
            price: product.price_range.minimum_price.final_price,
        };

        dispatch( addToCart(item) );
    }

    return (
        <Layout pageConfig={pageConfig}>
            <div className="product-image">
                <img src={product.image.url} alt={product.image.label} />
            </div>
            <div className="product-info">
                <div className="product-name">
                    <h1>{product.name}</h1>
                </div>
                <div className="product-price">
                    <Price priceRange={product.price_range} />
                </div>
                <div className="product-desc">
                    {ReactHtmlParser(product.description.html)}
                </div>
            </div>
            <div className="product-actions">
                <form onSubmit={handleAddToCart}>
                    <input
                        type="number"
                        name="qty"
                        className="qty"
                        placeholder="Qty"
                        onChange={handleChangeQty}
                    />
                    <button type="submit">Add to Cart</button>
                </form>
            </div>
        </Layout>
    );
}

const PDPSkeleton = () => {
    return (
        <div>
            <br />
            <Skeleton animation="wave" variant="rect" height={400} />
            <br />
            <Skeleton animation="wave" height={30} />
            <Skeleton animation="wave" height={20} width={50} />
            <br />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
        </div>
    );
};

export default compose(withApollo, withRedux)(Pdp);
