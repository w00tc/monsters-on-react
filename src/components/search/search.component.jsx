import React from 'react';

import './search.styles.css';

export const Search = props => (
        <input 
        className='search' 
        type="text" 
        placeholder="Search"
        onChange={props.search} />
)