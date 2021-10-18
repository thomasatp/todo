import React from 'react';
import './ListItem.scss'
import {HiOutlineTrash} from "react-icons/hi";
import {HiOutlinePencilAlt} from "react-icons/hi";

function ListItem({value, removeFromList, editItem}) {
    return (
        <li>
            <p>{value}</p>
            <div className="edition-icons">
                <HiOutlinePencilAlt className="icon" onClick={editItem}/>
                <HiOutlineTrash className="icon" onClick={removeFromList}/></div>
        </li>

    )
}

export default ListItem