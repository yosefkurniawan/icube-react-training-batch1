import React from "react";

const Searchbar = ({handleSearch}) => {
    const _handleSearch = e => {
        e.preventDefault();

        handleSearch(e.target.value);
    }
    return(
        <div className="searchbar">
            <form>
                <div>
                    <input type="text" placeholder="Search..." onChange={_handleSearch}/>
                </div>
                <div>
                    <input type="checkbox" /> Only show products in stock
                </div>  
            </form>
        </div>
    )
}

export default Searchbar;