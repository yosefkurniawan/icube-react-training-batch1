import React from 'react';

const ProductCategoryRow = ({product}) => {
    return (
        <tr>
            <td colSpan="2">
                <strong>{product.category}</strong>
            </td>
        </tr>
    );
}

export default ProductCategoryRow;
