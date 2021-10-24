import React from 'react';
import Player from './Player';

export default class PlayerWrapper extends React.Component {
    render(){
        return(
            <div className="player-wrapper">
                <Player {...this.props} />
            </div>
        );
    }
}