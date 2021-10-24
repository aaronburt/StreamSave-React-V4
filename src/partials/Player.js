import React from 'react';
import '../css/Player.css'

export default class Player extends React.Component {

    render(){
        let { id } = this.props.match.params;

        return(
            <div style={{position: "relative"}} className="aspect-ratio">
                <iframe 
                    title="iframe player"
                    src={"https://iframe.mediadelivery.net/embed/13819/" + id + "?autoplay=true"}
                    style={{border: 'none', position: 'absolute', top: 0, height: '100%', width: '100%'}} 
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" 
                    allowFullScreen={true} 
                />
            </div>
        );
    }
}