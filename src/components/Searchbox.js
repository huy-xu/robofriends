import React from 'react';

const Searchbox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="ba b--green bg-lightest-blue pa3" 
                type="search" 
                placeholder="Search robots" 
                onChange={searchChange}
            />
        </div>
    );
}

export default Searchbox;