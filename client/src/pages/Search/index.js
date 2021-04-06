import React, { useState } from 'react';
import SearchForm from '../../componets/SearchForm'

function Search(){
    const [search, setSearch] = useState('');

    
    const handleInputChange = event =>{
        setSearch(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        alert('you have submited')
        console.log(search)
    }

    return(
        <div>
            <SearchForm
            handleInputChange={handleInputChange}
            results={search}
            handleSubmit={handleSubmit}/>
            
        </div>
        
    )
};

export default Search;
