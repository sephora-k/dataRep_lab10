import React from 'react';      //imports react from React library

export class Header extends React.Component { //'export' keyword allows exportation & access to components (etc.) to other js files

    render(){
        return(
            <div>
                <h1>This is the header component</h1>
            </div>
        );
    }
}