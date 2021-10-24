import React from 'react';
import Description from './Description';
import PlayerWrapper from './PlayerWrapper';

export default class PlayerContainer extends React.Component {

    render(){
        return(
            <div>
                <div className="player-container">
                    <PlayerWrapper {...this.props} />
                </div>
                <Description {...this.props} />

            </div>
        );
    }
}