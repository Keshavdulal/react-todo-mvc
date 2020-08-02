import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({isLoading:false});
        },1000);
    }

    render(){
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
        const timeStyle={
            margin: 0,
            fontSize: 30,
            padding: 30,
            background: '#eeeeee',
            textAlign: 'center',
        }

        if (hours < 12 ){
            timeOfDay = 'Morning';
            timeStyle.color = 'green';
        }
        else if( hours >= 12 && hours < 17){
            timeOfDay ='Afternoon';
            timeStyle.color = 'purple';
        }
        else if( hours >= 17 && hours < 19){
            timeOfDay ='Evening';
            timeStyle.color = 'purple';
        }
        else{
            timeOfDay = 'Night';
            timeStyle.color = 'orange';
        }

        return(
            <div>
                <h1 style={timeStyle}>
                    {
                    this.state.isLoading
                    ?
                    `Loading...` 
                    :
                    `Good ${timeOfDay}`
                    }
                </h1> 
            </div>
        );
    }
}