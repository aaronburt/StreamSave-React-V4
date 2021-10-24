import React from 'react';
import NavigationBar from './partials/NavigationBar';
import PlayerContainer from './partials/PlayerContainer';


export default class Video extends React.Component {

    render(){
        return(
            <div>
                <NavigationBar/>
                <PlayerContainer {...this.props} />
            </div>
        );
    }
}

