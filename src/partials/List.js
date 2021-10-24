import React from 'react';

export default class List extends React.Component {

    constructor(){
        super();
        this.state = { payload: false }
    }

    componentDidMount(){
        fetch('https://fetch-video.streamsave.xyz/')
            .then(response => { return response.json(); })
            .then(data => { this.setState({ payload: data.items }) })
    }

    mouseOver(e){
        let url = e.target.getAttribute('preview');
        e.target.style.backgroundImage = `url(${url})`
    }

    mouseLeave(e){
        let url = e.target.getAttribute('url');
        e.target.style.backgroundImage = `url(${url})`
    }

    render(){
        if(this.state.payload){

            let pull_zone_url = 'https://vz-5a95cccb-265.b-cdn.net/';
            let rsp = [];

            for(let [key, value] of Object.entries(this.state.payload)){                
                let BGimg = pull_zone_url + value.guid + '/' + value.thumbnailFileName;
                let Preimg = pull_zone_url + value.guid + '/preview.webp'
                if(value.availableResolutions !== null){
                    rsp.push(
                
                        <div key={BGimg}>
                            <a href={'/v/' + value.guid} value="es">
                                <div preview={Preimg} url={BGimg} className="list-img" style={{ backgroundImage: `url(${BGimg})`}} onMouseLeave={this.mouseLeave} onMouseOver={this.mouseOver}></div>
                                <div className="list-img-title">{value.title}</div>
                            </a>
                        </div>
                    );
                }
            }

            return(<div className="list-container">{rsp}</div>);
        } else {
            return (<div></div>)
        }
    }
}

