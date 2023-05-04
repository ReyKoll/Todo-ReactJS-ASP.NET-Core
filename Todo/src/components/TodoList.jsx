import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, onRemove, onUpdate, onToggle}) => {
    return (
        <div>
            <ul> {todos.map((todo) => (
                <Todo 
                    key={todo._id}
                    todo={todo}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                    onToggle={onToggle}
                />
                ))}  
            </ul>
        </div>
    )
}

export default TodoList
