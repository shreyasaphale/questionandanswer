import React from 'react'
import App from '../App';
import './ListItems.css'


function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key="item.key">
            <h2>{item.text}</h2>
            <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
  
            <button>comment</button>
        </div>
    })
    return (

        <div>
        <br/>
         
         {listItems}
         
        </div>
     
    )
    
}

export default ListItems
