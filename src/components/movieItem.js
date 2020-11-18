import React from 'react'; //import React from React Library
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component { //'export' keyword will allow access for this class to other .js files

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
                </Card>

            </div> //content within the div tag will display in the browser
        );
    }
}