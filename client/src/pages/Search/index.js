import React, { useState, useEffect } from 'react';
import SearchForm from '../../componets/SearchForm'
import SearchResults from '../../componets/SearchResults'
import API from '../../utils/API'

function Search(){
    const [search, setSearch] = useState("Hacker News");
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setUrl] = useState("");

    useEffect(() =>{
        if(!search){
            return;
        }
        API.searchTerms(search)
            .then(res => {
              console.log(res.data)
              setAuthor(res.data[1]);
              setUrl(res.data[1])  
              console.log("mu log" + res.data);
              console.log(res.data.hits)
              setTitle(res.data.hits.map(results => {return `${results.title}`;}))
              console.log(setTitle)
              
            })
            .catch(err => {
                console.log(err);
            })
    }, [search]);

    

    
    const handleInputChange = event =>{
        setSearch(event.target.value);
    }

    return(
        <div>
            <SearchForm
            handleInputChange={handleInputChange}
            results={search}
            />
            
            <SearchResults
            title={title}
            author={author}
            url={url}
            />
        </div>
        
    )
};

export default Search;
