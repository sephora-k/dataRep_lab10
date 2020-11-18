import React from 'react'; //import React from React Library
import axios from 'axios'; //import Axios from Axios Library

export class Create extends React.Component { //'export' keyword will allow access for this class to other .js files

    constructor() {
        super(); // envokes constructor of parent class

        this.onSubmit = this.onSubmit.bind(this); //all events must be binded
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    onChangeTitle(e) { //this method is called when value of input control changes
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e) { //envoke method
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e) { //envoke method
        this.setState({
            Poster: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault(); //prevents button from submitting repeatedly
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster); //alerts when button is clicked
    
        const newMovie = {  //Objects
            Title: this.state.Title,
            Year: this.state.Year,
            Poster: this.state.Poster
        }
        axios.post('http://localhost:4000/api/movies', newMovie) //Post request from current URL & returns promise (asynchronous)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Movie Title: </label>
                        <input type='text' className='form-control' value={this.state.Title} onChange={this.onChangeTitle}>
                        </input>
                    </div>

                    <div className='form-group'>
                        <label>Add Movie Year: </label>
                        <input type='text' className='form-control' value={this.state.Year} onChange={this.onChangeYear}>
                        </input>
                    </div>

                    <div className='form-group'>
                        <label>Movie Poster: </label>
                        <textarea type='text' className='form-control' value={this.state.Poster} onChange={this.onChangePoster}>
                        </textarea>
                    </div>

                    <div className='form-group'>
                        <input type='Submit' value='Add Movie' className='btn btn-primary'>

                        </input>
                    </div>
                </form>
            </div> //form within div allows user to submit movies
        );
    }
}