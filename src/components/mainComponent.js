import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import TodoItem from './TodoItem';
import todosData from '../todoData'; 

export default class MainComponent extends Component{
    constructor(props){
        super(props);
        
        this.state ={
            todosData:todosData,
        }
        this.onClickHandler=this.onClickHandler.bind(this);
    }

    //doesn't look good as of now but works
    onClickHandler(id){
        console.log('@onClickHandler',id);
        // my method
        // let newTodosData = this.state.todosData;
        // let index = this.state.todosData.findIndex(element => (element.id == id))
        // newTodosData[index].completed=!newTodosData[index].completed;
        // this.setState({todosData:newTodosData});

        //alternate method
        this.setState(prevState => {
            const updatedTodos = prevState.todosData.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
            return {
                todosData: updatedTodos
            }
        })
    }

    render(){
        // console.log('@render-maincomp');

        let completedItems = this.state.todosData.reduce((acc,item) => item.completed ? ++acc : acc, 0)
        let totalItems = this.state.todosData.length;

        const MyTodoItems = this.state.todosData
            .map(item => <TodoItem 
                            key={item.id} 
                            item={item}
                            onClickHandler={this.onClickHandler}
                        />);

        return(
            <div className='todo-list'>
            <span>
                {`${completedItems}/${totalItems} Completed`}
            </span>
                {MyTodoItems}
            </div>
        );
    }
}