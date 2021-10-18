import React, {useState, useEffect} from 'react'
import './App.scss';
import Form from './form/Form'
import List from './list/List'

function App() {

    const savedList = localStorage.getItem('list')

    const [list,
        setList] = useState(savedList
        ? JSON.parse(savedList)
        : [])

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    const [value,
        setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value)
    }

    function addTo(e) {
        e.preventDefault()
        setList([
            {
                value
            }, ...list
        ])
        setValue("")
    }

    return (
        <div className="App">
            <List list={list} setList={setList}/>
            <Form addTo={addTo} value={value} handleChange={handleChange}/>
        </div>
    );
}

export default App;
