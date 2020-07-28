import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import TodoItem from './TodoItem';
import todosData from '../todoData'; 

class MainComponent extends Component{
    constructor(props){
        super(props);
        
        this.state ={
            todosData:todosData,
        }
        this.onClickHandler=this.onClickHandler.bind(this);
    }

    //doesn't look good as of now but works
    onClickHandler(event,id){
        // console.log('@onClickHandler',event.target.checked,id);
        let index = this.state.todosData.findIndex(element => (element.id == id))
        let newTodosData = this.state.todosData;
        newTodosData[index].completed=!newTodosData[index].completed;
        this.setState({todosData:newTodosData});

    }

    render(){
        // console.log('@render-maincomp');

        let completedItems = this.state.todosData.reduce((acc,item) => item.completed ? ++acc : acc, 0)
        const totalItems = this.state.todosData.length;

        let MyTodoItems = this.state.todosData
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

export default MainComponent;