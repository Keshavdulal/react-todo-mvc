import React from 'react'

export default function TodoItem(props){
         return (
             <div className="todo-item">
                <input 
                    type='checkbox' 
                    checked={props.item.completed}
                    onChange={()=>props.onClickHandler(props.item.id)}
                    />
                
                <p className={props.item.completed ? 'completed-todos' : ''}>
                    {props.item.text}
                </p>
            </div>
        )
}