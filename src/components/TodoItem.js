import React from 'react'

export default function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type='checkbox' checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}
