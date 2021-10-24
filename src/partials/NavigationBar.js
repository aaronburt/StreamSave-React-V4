import React from 'react';

/* Import the required css file */
import '../css/Navigation.css'

export default class NavigationBar extends React.Component {

    render(){
        return(
            <ul>
                <li><a href="/">StreamSave</a></li>
            </ul>
        );
    }
}