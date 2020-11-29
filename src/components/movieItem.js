import React from 'react'; //import React from React Library
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class MovieItem extends React.Component { //'export' keyword will allow access for this class to other .js files

    constructor(){//contrustor binds method & function
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(e){
        e.preventDefault(); //event allows to cancel method in DB
        console.log("Delete "+this.props.movie._id);

        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then( ()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (
            <div>


                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200" ></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button> 
                </Card>

            </div> //content within the div tag will display in the browser
        );
    }
}