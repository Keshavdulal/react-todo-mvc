import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import TodoItem from './TodoItem';
import todosData from '../todoData'; 

class MainComponent extends Component{
    constructor(props){
        super(props);
        
        let completedItems = todosData.reduce((acc,item) => item.completed ? ++acc : acc, 0)
        const totalItems = todosData.length;

        this.state ={
            completedItems:completedItems,
            totalItems:totalItems,
        }
    }

    render(){
        const MyTodoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>);

        return(
            <div className='todo-list'>
            <span>
                {`${this.state.completedItems}/${this.state.totalItems} Completed`}
            </span>

                {MyTodoItems}
            </div>
        );
    }
}

export default MainComponent;