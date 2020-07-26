import React,{Component} from 'react'

 class TodoItem extends Component {
     constructor(props){
         super(props);
         this.state={
             isChecked:props.item.completed,
             description: props.item.text,
         }
         this.onClickHandler=this.onClickHandler.bind(this);
     }
     
     onClickHandler(event){
        this.setState({isChecked:event.target.checked});
     }

     render(){
         return (
             <div className="todo-item">
                <input 
                    type='checkbox' 
                    checked={this.state.isChecked}
                    onChange={(e)=>this.onClickHandler(e)}
                    />
                
                <p className={this.state.isChecked ? 'text-strike' : ''}>
                    {this.state.description}
                </p>
            </div>
        )
    }
}

export default TodoItem;