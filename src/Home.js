import React from 'react';
import NavigationBar from './partials/NavigationBar';
import List from './partials/List';

export default class Home extends React.Component {

    render(){
        return(
            <div>
                <NavigationBar/>
                <List/>
            </div>
        );
    }
}

