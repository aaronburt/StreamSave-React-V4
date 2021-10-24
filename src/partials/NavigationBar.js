import React from 'react';

/* Import the required css file */
import '../css/Navigation.css'

export default class NavigationBar extends React.Component {

    render(){
        return(
            <ul>
                <li><a href="/" title="Take me home" className="linky" ><i class="fas fa-home"></i></a></li>
                <li><a href="/latest" title="See what's new" className="linky"><i class="far fa-calendar-plus"></i></a></li>
                <li><a href="/latest" title="Legal things" className="linky"><i class="fas fa-file-contract"></i></a></li>
            </ul>
        );
    }
}