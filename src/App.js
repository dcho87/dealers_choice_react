import axios from 'axios';
import React, { Component } from 'react';
import Nav from './components/Nav'
import Character from './components/Characters'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            selectedHouse: 'Gryffindor',
            selectedCharacter: ''
        }
    }

async componentDidMount () {
    const post = (await axios.get("http://hp-api.herokuapp.com/api/characters")).data
    this.setState({
        data: post
    })
}

    updateHouse = (house) => {
        this.setState({
            selectedHouse: house
        })
    }

    render(){
        const { data, selectedHouse} = this.state
        return (
            <div>
                <Nav updateHouse={this.updateHouse} selectedHouse={selectedHouse}/>
                <Character data={data} selectedHouse={selectedHouse}/>
            </div>
        );
    }
}

export default App;