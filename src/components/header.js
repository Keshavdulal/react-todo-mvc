import React from 'react';

const Header = () => {
        const date = new Date();
        const hours = date.getHours();
        const mins = date.getMinutes();
        const timeStyle={
            margin: 0,
            fontSize: 30,
            padding: 30,
            background: '#eeeeee',
            textAlign: 'center',
            color: 'orange',
        }

        return(
            <div>
                <h1 style={timeStyle}>
                    {`${hours}:${mins}`}
                </h1> 
            </div>
        );
}
export default Header;