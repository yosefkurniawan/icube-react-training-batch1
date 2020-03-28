import React from 'react';
/** @jsx jsx  */
import {jsx, css} from '@emotion/core';

class Searchform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ""
        }
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.keyword);
    }
    handleKeywordChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }
    render() {
        return (
            <div css={styles.wrapper} className="search-wrapper">
                <form onSubmit={ this.handleSearch } >
                    <input css={styles.input} type="text" name="keyword" placeholder="Search..." onChange={this.handleKeywordChange}/>
                    <button css={styles.button} type="submit">Search</button>
                </form>
            </div>
        )
    }
}

const styles = {
    wrapper: css`
        display: flex;
        justify-content: flex-end;
    `,
    input: css`
        border: 1px solid #ddd;
        height: 33px;
        line-height: 33px;
        width: 200px;
        padding: 0 15px;
    `,
    button: css`
        border: 1px solid #ddd;
        height: 34px;
        line-height: 34px;
        background: #ddd;
        margin-left: 10px;
        padding: 0 20px;
        text-transform: uppercase;
        vertical-align: middle;
    `,
}
export default Searchform;