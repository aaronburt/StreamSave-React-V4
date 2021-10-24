import React from 'react';
import NavigationBar from './partials/NavigationBar';
import Latest from './partials/Latest';

export default class LatestUpload extends React.Component {

    render(){
        return(
            <div>
                <NavigationBar/>
                <Latest/>
            </div>
        );
    }
}
