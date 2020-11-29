import React from 'react';      //imports react from React library
import { Movies } from './movies'; //imports 'Movies' class 
import axios from 'axios';

export class Read extends React.Component { //'export' keyword allows exportation & access to components (etc.) to other js files

    constructor(){  //binds Reload Data
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = { //this object allows data to be stored
        movies: []
    };

    componentDidMount() { //component life cycle hook is called every time a component becomes active
        axios.get('http://localhost:4000/api/movies') //get method retrieves information for localhost URL
            .then((response) => {
                this.setState({ movies: response.data })
            }) //fulfilled state in a promise

            .catch((error) => {
                console.log(error)
            }); //rejected state in a promise, error

    }

    ReloadData(){
        axios.get('http://localhost:4000/api/movies') 
            .then((response) => {
                this.setState({ movies: response.data })
            }) 

            .catch((error) => {
                console.log(error)
            }); //retrieves all information from DB
    }

    render() {
        return (
            <div>
                <h1>This is the read component</h1>
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies> 
            </div> //embedded in the 'read' component is the 'movie' component in this div
        );
    }
}