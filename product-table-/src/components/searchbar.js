import React from 'react';

const Searchbar = (props) => {

    const onKeywordChange = (e) => {
        props.handleKeywordChange(e.target.value);
    }

    const onStockOnlyChange = (e) => {
        props.handleStockOnlyChange(e.target.checked);
    }

    return (
        <form className="searchbox">
            <input type="text" name="keyword" value={props.keyword} placeholder="Search..." onChange={onKeywordChange} />
            <input type="checkbox" name="in_stock" onChange={onStockOnlyChange} checked={props.stockOnly}/> &nbsp; Show only in-stock product
        </form>
    );
}

export default Searchbar;
