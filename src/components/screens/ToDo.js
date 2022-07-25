import React, { useState } from 'react'
import delet from "../assets/images/delete.svg"
import plus from "../assets/images/plus.svg"
import tick from "../assets/images/tick-green.svg"
import revert from "../assets/images/revert.svg"

export default function ToDo() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");
    const[compItems,setCompItems] = useState([]);
    let addItems = (e) => {
        e.preventDefault();
        setItems([...items, {name:input, id:items.length+1}]);
        setInput("");
    }
    let completed =(id,name) =>{
        let del_item = items.filter((item) => item.id !== id);
        let new_items = {
            id: id,
            name: name,
        }
        console.log(new_items)
        console.log(id)
        setCompItems([...compItems, new_items]);
        console.log(compItems);
        setItems(del_item);
    } 
    let revertItem = (id,name) =>{
        let del_item = compItems.filter((item) => item.id !== id);
        let new_items = {
            id: id,
            name: name,
        }
        console.log(new_items)
        console.log(id)
        setItems([...items, new_items]);
        console.log(compItems);
        setCompItems(del_item);
    } 
    let removeItems=(id) =>{
        console.log(id);
        let new_items = items.filter((item) => item.id !== id);
        setItems(new_items);
    }
    let removeCompItems = (id) => {
        let new_items = compItems.filter((item) => item.id !== id);
        setCompItems(new_items);
    }
    return (
        <div className='Body'>
            <div className="containr">
                <h1>Todo List</h1>
                <h3>Things to be done</h3>
                <ul>
                    {items.map((item) => (
		                <li key={item.id}>
                            <div className="left">
                                <div className="circle" onClick={() => completed(item.id,item.name)}></div>
                                <h6>{item.id},{item.name}</h6>
                            </div>
                            <div className="right">
                                <div className="img-box">
                                    <img src={delet} alt="imge" onClick={() => removeItems(item.id)} />
                                </div>
                            </div>
                        </li>
		            ))}
                </ul>
                <form>
                    <div className="img-box">
                        <img src={plus} alt="imge" />
                    </div>
                    <input 
                            value={input}
                            placeholder="Type new task" 
                            onChange= {(e) => setInput(e.target.value)}
                            
                        />
                    <button onClick={addItems}>Add New</button>
                </form>
                <h3>Completed</h3>
                <ul className="complet">
                    {compItems.map((item, index) => {
                        return (
                            <li key={index}>

                                <div className="left complet">
                                    <div className="img-tick-box">
                                        <img src={tick} alt="imge"/>
                                    </div>
                                    <h6>{item.id},{item.name}</h6>
                                </div>
                                <div className="right complet">
                                    <div className="img-box one">
                                        <img src={revert} alt="imge" onClick={() => revertItem(item.id,item.name)}/>
                                    </div>
                                    <div className="img-box">
                                        <img src={delet} alt="imge" onClick={() => removeCompItems(item.id)} />
                                    </div> 
                                </div>
                            </li>
                        )
                    })}  
                </ul> 
            </div>
        </div>
    )
}



