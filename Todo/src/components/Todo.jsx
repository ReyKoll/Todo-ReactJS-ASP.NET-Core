import React, { useState } from "react";

const Todo = ({ todo, onRemove, onUpdate, onToggle}) => {
    todo.isDone = todo.isDone || false

    const [edit, setEdit] = useState(false)
    const [newText, setNewText] = useState(todo.label)

    const handleUpdate = () => {
        onUpdate(todo._id, newText)
        setEdit(false)
    }

    return(
        <div className="item-todo">
            <li>
                <input 
                    type='checkbox' 
                    checked={todo.isDone}
                    onChange={() => onToggle(todo._id)}
                /> {edit ? (
                    <input 
                        type='text'
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                ) : (<span>{todo.label}</span>)}
                <button onClick={() => onRemove(todo._id)}>Delete</button>
                {edit ? (
                    <button onClick={handleUpdate}>Save</button>
                ) : (<button onClick={() => setEdit(true)}>Edit</button>)}
            </li>
        </div>
    )
}

export default Todo
