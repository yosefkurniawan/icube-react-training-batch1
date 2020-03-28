import React from 'react';
import ProductRow from './product-table/product-row';
import ProductCategoryRow from './product-table/product-category-row';

const ProductTable = ({products, stockOnly, keyword}) => {
    
    const rows = [];
    let lastCategory = "";

    products.map((product,index) => {
        if(stockOnly && !product.stocked) {
            return;
        }

        if(product.name.toLowerCase().indexOf(keyword.toLowerCase()) === -1) {
            return;
        }
        if(product.category !== lastCategory) {
            rows.push(<ProductCategoryRow product={product} key={product.category} />);
        }

        rows.push(<ProductRow product={product} key={index} />);

        lastCategory = product.category;
    })

    return (
        <div className="productTable">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;
