import React from 'react'; //import React from React Library
import { MovieItem } from './movieItem'; //imports Movie Item from movieItem.js

export class Movies extends React.Component{ //'export' keyword will allow access for this class to other .js files

        render(){
            return this.props.movies.map( (movie)=>{ //'map' function takes the collection & splits them into sections
                return <MovieItem movie={movie}></MovieItem>
            })
        }
}