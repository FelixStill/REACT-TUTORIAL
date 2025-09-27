import { useState } from "react"

const TodoList = () =>{
    const [todos,setTodos] = useState([])
    const [inputValue,setInputValue] = useState("")
    const submitHandle = e => {
        e.preventDefault()
        if(inputValue.trim()){
            setTodos([...todos,inputValue])
            setInputValue("")
        }
    }
    const changeHandle = e =>{
        setInputValue(e.target.value)
    }
    return (
        <div>
            <div>
                <form onSubmit={submitHandle}>
                    <input placeholder="Please enter code" value={inputValue} onChange={changeHandle}/>
                    <button type="submit">Add todo</button>
                </form>
            </div>
            <ul>
                {todos.map((todo,index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        </div>
    )
}
export default TodoList