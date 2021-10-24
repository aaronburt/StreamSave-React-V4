import React from 'react';
import NavigationBar from './partials/NavigationBar';

export default class Home extends React.Component {

    render(){
        return(
            <div>
                <NavigationBar/>
                <h4 style={{color: 'lightgray', textAlign: 'center'}}>
                    StreamSave is an <h2 style={{display: 'inline'}}>IN BETA</h2> Video Delivery Platform
                </h4>
            </div>
        );
    }
}

