import React from 'react';
import ProductRow from './product-row';
import ProductCategoryRow from './product-category-row';

const ProductTable = (props) => {
    const keyword = props.keyword;
    const products = props.products;
    console.log(keyword);
    console.log(products);

    const rows = [];
    let lastCategory = "";

    products.map((product) => {
            if (
                keyword &&
                product.name.toLowerCase().indexOf(keyword.toLowerCase()) === -1
            ) {
                console.log("wis");
                return;
            }
        if(product.category != lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }

        rows.push(
            <ProductRow product={product}  key={product.id}/>
        );
        
        lastCategory = product.category;
    })

    return(
        <div className="product-table">
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;
