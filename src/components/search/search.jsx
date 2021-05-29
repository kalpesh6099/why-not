import React from 'react'

import './search.css'

export const Search = ({handle , placeholder}) => (
    <div>
        <input
            className = 'search' 
            type="text" 
            placeholder = {placeholder}
            onChange = {handle}
        />
    </div>
)