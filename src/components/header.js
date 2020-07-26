import React from 'react';
// import ReactDOM from 'react-dom';



function Header(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const timeStyle={
        margin: 0,
        fontSize: 30,
        padding: 30,
        background: 'grey',
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
                Good {timeOfDay +" "+ hours}
            </h1> 
        </div>
    );
}

export default Header;