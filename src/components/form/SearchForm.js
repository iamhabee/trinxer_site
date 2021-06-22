import React from 'react';
import ButtonSearch from '../../components/button/ButtonSearch';

const SearchForm = ({isLoading, setSearch, submitForm}) => {
    
    return (
        <form className="search-form" role="search" onSubmit={submitForm}>
            <div className="search input-group">
                <input className="form-control form-control-lg" onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search" />
                <div className="input-group-append">
                    <ButtonSearch />
                </div>
            </div>
            {isLoading && <p>Searching...</p>}
        </form>
    );
};

export default SearchForm;
