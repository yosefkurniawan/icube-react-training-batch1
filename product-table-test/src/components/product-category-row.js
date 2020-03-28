import React from "react";

const ProductCategoryRow = ({ category }) => (
    <tr className="category-row">
        <td colSpan="2">
            <strong>{category}</strong>
        </td>
    </tr>
);

export default ProductCategoryRow;