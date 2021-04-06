import React from 'react';


function SearchForm(props){
    return(
        <form>
            <div>
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name='term'
                list='term'
                type='text'
                placeholder='search hacker news'
                id='term'
                />
                <button type='submit'
                onClick={props.handleSubmit}>submit</button>
            </div>
        </form>
    );
};

export default SearchForm;