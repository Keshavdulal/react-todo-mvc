import React from 'react';
import randomcolor from 'randomcolor';

export default class NumberPlayer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            color:""
        }
        this.handleIncrementOnClick=this.handleIncrementOnClick.bind(this);
        this.handleDecrementOnClick=this.handleDecrementOnClick.bind(this);
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            this.setState({color:randomcolor()});
        }
    }

    handleIncrementOnClick(){
        // this.setState(prevState=>{count:prevState.count++});
        this.setState(prevState => {
            return {count: prevState.count++}
        })
    }

    handleDecrementOnClick(){
        // this.setState(prevState=>{count:prevState.count--});
        this.setState(prevState => {
            return {
                count: prevState.count--
            }
        })
    }

    render(){
            return (
            <div>
                <h2>This is a random colored Number Player</h2>
                <h1 style={{color:this.state.color}}>{this.state.count}</h1>

                <button onClick={this.handleIncrementOnClick}>+</button>
                <button onClick={this.handleDecrementOnClick}>-</button>
            </div>
        )
    }
}
