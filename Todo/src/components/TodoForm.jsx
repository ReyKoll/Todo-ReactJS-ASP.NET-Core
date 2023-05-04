import React, { useState } from "react";

const TodoForm = ({ onAdd }) => {
    const [label, setLabel] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (label.trim()) {
            onAdd(label)
            setLabel('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder='Whatcha Gonna Do?'
            />
            <button type='submit'>Add</button>
        </form>
    )
}

export default TodoForm
