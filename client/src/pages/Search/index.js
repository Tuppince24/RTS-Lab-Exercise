import React, { useState } from 'react';
import SearchForm from '../../componets/SearchForm'

function Search(){
    const [search, setSearch] = useState('');

    const handleInputChange = event =>{
        setSearch(event.target.value);
    }

    return(
        <SearchForm
        handleInputChange={handleInputChange}
        results={search}
        />
    )
};

export default Search;
