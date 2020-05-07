import React from 'react';
import Layout from '../components/layout';
import { useSelector } from 'react-redux';
import { withRedux } from '../lib/redux';

const cart = () => {
    const cart = useSelector(state => state.cart);

    const pageConfig = {
        title: 'Shopping Cart',
        className: 'page-cart',
    };

    let total = 0;
    let currency = '';
    cart.forEach((item) => {
        total += parseInt(item.qty) * item.price.value;
        currency = item.price.currency;
    });

    return (
        <Layout pageConfig={pageConfig}>
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                {!cart.length ? (
                    <p>There is no items in your cart...</p>
                ) : (
                    <table>
                        <thead>
                            <th>Product</th>
                            <th>Subtotal</th>
                        </thead>
                        {cart.map((item) => (
                            <tbody>
                                <td>
                                    <div className="cart-product-info-wrapper">
                                        <div className="cart-product-image">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </div>
                                        <div className="cart-product-info">
                                            <div className="cart-product-name">
                                                <strong>{item.name}</strong>
                                            </div>
                                            <div className="cart-product-price">
                                                {item.price.currency}{' '}
                                                {item.price.value}
                                            </div>
                                            <div className="cart-product-qty">
                                                <div>Qty: {item.qty}</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="cart-product-subtotal">
                                        <div>
                                            {item.price.currency}
                                            {` `}
                                            {item.price.value *
                                                parseInt(item.qty)}
                                        </div>
                                    </div>
                                </td>
                            </tbody>
                        ))}
                        <tfoot>
                            <td>
                                <strong>Total: </strong>
                            </td>
                            <td>
                                {currency} {total}
                            </td>
                        </tfoot>
                    </table>
                )}
            </div>
        </Layout>
    );
}

export default (withRedux)(cart);
