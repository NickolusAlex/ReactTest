import React from 'react';
import './menu.css';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';

class Contact extends React.Component{
render(){
    return(
        <div>
            <div className="outercontainer">
                <div className="Heading">Contact us</div>
                <div className="paragraph">
                    <MailIcon className="icons" />Mail US:  abc@gmail.com
                </div>
                <div className="paragraph">
                    <CallIcon className="icons" /> Call US:  001122334455
                </div>
                
            </div>
        </div>
    )
}
}
export default Contact;
