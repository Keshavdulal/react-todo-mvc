import React from 'react'

export default class StarWarsInfo extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }

    componentDidMount(){
        fetch("https://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data=> {
            console.log(data);
            this.setState({
                characters:data,
            })
        })
        
        
    }

    render(){
        return (
            <div>
                <h1>Star Wars People</h1>       
                {
                this.state.characters &&
                <span>{this.state.characters.name}</span>
                }
            </div>
        )
    }
}
