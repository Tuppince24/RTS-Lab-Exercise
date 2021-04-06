import React from 'react';


function SearchResults(props){
    return(
        <ul>
            <li>
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <a href={props.url}>{props.url}</a>
            </li>
        </ul>
    );
}

export default SearchResults;