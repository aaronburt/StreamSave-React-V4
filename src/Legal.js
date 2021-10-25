import React from 'react';
import NavigationBar from './partials/NavigationBar';

export default class Legal extends React.Component {

    render(){
        document.title = 'Latest - StreamSave';
        return(
            <div>
                <NavigationBar/>
                <div style={{width: "50%", margin: "auto", color: "lightgray"}}>
                    <p>This is the serious stuff</p>
                    <h4>Terms of Service</h4>
                    <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of StreamSave, the Privacy Policy, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable regional laws. At times we may modify these Terms and Conditions at any time without notice to you by posting revised Terms and Conditions of Service. Your use of the website constitutes your binding acceptance of these Terms and Conditions of Service, including any modifications that we make. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
                    <p>StreamSave includes a combination of content that we create and that other third party content suppliers create. You understand that StreamSave is provided "AS IS", and that StreamSave does not guarantee the accuracy, integrity or quality of any content available on the website. </p>
                    <p>StreamSave.xyz disclaims all responsibility and liability for the accuracy, availability, timeliness, security or reliability of the Service. We reserve the right to modify, suspend or discontinue the Service with or without notice at any time and without any liability to you.</p>
                    <h4>Copyright</h4>
                    <p>You are responsible for and are required to follow the United States’s Digital Millennium Copyright Act (PUBLIC LAW 105–304—OCT. 28, 1998) and relevant local laws corresponding to your jurisdiction. Failure to comply with DMCA and/or local laws will result in the content being removed from the platform and you facing penalty actions on your account.</p>
                </div>
            </div>
        );
    }
}

