import React from 'react';
import './List.scss'
import ListItem from '../list-item/ListItem'


function List({list, setList}) {


    function remove(value) {
        let filteredList = list.filter((listItem) => listItem.value !== value)
        setList(filteredList)
    }

    function edit(value) {
        let filteredItem = list.filter((listItem) => listItem.value === value)
        filteredItem[0].value = prompt('Change me')
        setList([...list])
        console.log(filteredItem)
    }


    return (
        <div className="scroll-container">
            <ul>{list.map(({value}, index) => <ListItem key={index} value={value} editItem={() => edit(value)} removeFromList={() => remove(value)}/>)}</ul>
        </div>
    )
}

export default List