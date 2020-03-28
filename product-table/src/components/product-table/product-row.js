import React from 'react';

const ProductRow = ({product}) => {
    const color = (product.stocked)? 'green':'red';
    return (
        <tr style={{ color: color }}>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

export default ProductRow;
