import React from 'react';      //imports react from React library

export class Content extends React.Component { //'export' keyword allows exportation & access to components (etc.) to other js files

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}