import React from 'react';
import './menu.css';

class About extends React.Component{
render(){
    return(
        <div>
           <div className="outercontainer">
                <div className="Heading">About React</div>
                    <div className="paragraph">
                    React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components.
                    </div>
                    <div className="paragraph"> It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
                    </div>
                    <div className="paragraph"> However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries.
                    </div>
           </div>
        </div>
    )
}

}
export default About;