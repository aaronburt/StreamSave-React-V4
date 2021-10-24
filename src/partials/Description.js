import React from 'react';
import '../css/Description.css';

class Description extends React.Component {

    constructor(){
        super();
        this.state = { success: false, status: false, video: {} }
    }

    componentDidMount(){            
        fetch('https://fetch-video.streamsave.xyz/' + this.props.match.params.id)
            .then(response => { return response.json() })
            .then(data => { 
                let shortMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
                let timeConverted = new Date(data.dateUploaded);
                let newTimeStamp = `${timeConverted.getDate()} ${shortMonth[timeConverted.getUTCMonth()]} ${timeConverted.getFullYear()}`
                this.setState({
                    success: true,
                    video: { vId: data.guid, vTitle: data.title, vViews: data.views, vTime: newTimeStamp }
                })
            })
            .catch(err => { this.setState({ status: 'error loading...' }) }) 
    }

    render(){
        if(this.state.success){
            const { vTitle, vViews, vTime, vId } = this.state.video;

            document.title = vTitle + ' - StreamSave'


            return(
                <div className="description-wrapper">
                    <div className="description">
                        <div className="description-title">{vTitle}</div>
                        <div className="description-subtitle">{vViews} views - {vTime}</div>
                        <div className="description-subtitle">
                            <a href={"/report/" + vId }><i class="fas fa-flag"></i></a>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(<div></div>)
        }
    }
}

export default Description;