import React from 'react';

function SearchForm(props){
    return(
        <form>
            <div>
                <input
                value={props.search}
                onchange={props.handleInputChange}
                name='term'
                list='term'
                type='text'
                placeholder='search hacker news'
                id='term'
                />
            </div>
        </form>
    );
};

export default SearchForm;