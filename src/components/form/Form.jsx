import React from 'react';
import './Form.scss'

function Form({value, handleChange, addTo}) {

    return (
        <form onSubmit={addTo}>
            <input type="text" placeholder="Add todo" value={value} onChange={handleChange}/>
        </form>
    )
}

export default Form