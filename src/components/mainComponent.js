import React from 'react';
import ReactDOM from 'react-dom';

import TodoItem from './TodoItem';
import todosData from '../todoData'; 

const MyTodoItems = todosData
                    .map(item => <TodoItem key={item.id} item={item}/>);


function MainComponent(){
    return(
        <div className='todo-list'>
            {MyTodoItems}
        </div>
    );
}

export default MainComponent;