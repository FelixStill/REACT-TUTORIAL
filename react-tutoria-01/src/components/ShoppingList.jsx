import { useState } from "react"

const ShoppingList = () =>{
    const [items,setItems] = useState([])
    const [name,setName] = useState('')
    const [quantity,setQuantity] = useState('')
    const submitHandle = (e) =>{
        e.preventDefault()
        const newItem = {
            name,quantity:parseInt(quantity)
        }
        setItems((prevItems) => [...prevItems,newItem])
        setName('')
        setQuantity('')
    }

    return (
        <div>
            <form onSubmit={submitHandle}>
                <label>Name:</label>
                <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Quantity:</label>
                <input type="number" placeholder="Item Quantity" value={quantity} onChange={e => setQuantity(e.target.value)}/>
                <button type="submit">Add Items</button>    
            </form>
            <ul>
                {items.map((item,index) => (
                    <li key={index}>{item.name} - Quantity:{item.quantity}</li>
                ))}
            </ul>        
        </div>
    )
}

export default ShoppingList