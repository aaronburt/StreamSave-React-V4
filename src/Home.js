import React from 'react';
import NavigationBar from './partials/NavigationBar';

export default class Home extends React.Component {

    render(){
        return(
            <div style={{color: 'lightgray', textAlign: 'center'}}>
                <NavigationBar/>
                <h4 >StreamSave is an
                </h4><h2 style={{display: 'inline'}}>IN BETA</h2><h4>  Video Delivery Platform
</h4>
            </div>
        );
    }
}

