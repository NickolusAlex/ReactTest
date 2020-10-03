import React from 'react';
import './menu.css';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class Profile extends React.Component {
    
render(){

    return(
        <div>

            <div className="outercontainer">
                <div className="Heading"><AccountCircleIcon fontSize="large" /></div>
    <div className="paragraph">User Name: Admin</div>
                <div className="paragraph">User address: abc road, xyz city</div>
            </div>
        </div>
    )
}
}
export default Profile;