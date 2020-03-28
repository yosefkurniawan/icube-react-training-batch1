import React, { useState } from 'react';
import './App.css';
import Searchbar from './components/searchbar';
import ProductTable from './components/product-table';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function App() {
    const [keyword, setKeyword] = useState('');
    const [stockOnly, setStockOnly] = useState(false);

    function handleKeywordChange(newKeyword) {
      setKeyword(newKeyword);
    }

    function handleStockOnlyChange(newStockOnly) {
        setStockOnly(newStockOnly);
    }

    return (
        <div className="App">
            <Searchbar
                keyword={keyword}
                stockOnly={stockOnly}
                handleKeywordChange={handleKeywordChange}
                handleStockOnlyChange={handleStockOnlyChange}
            />
            <ProductTable products={PRODUCTS} keyword={keyword} stockOnly={stockOnly} />
        </div>
    );
}

export default App;