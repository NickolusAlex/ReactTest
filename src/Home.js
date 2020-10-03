import React from 'react';
import './menu.css';

class Home extends React.Component {
    render() {
        return (
            <div >
                <div className="outercontainer">
                    <div className="Heading">React Intro</div>
                    <div className="paragraph">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.<br></br>Declarative views make your code more predictable and easier to debug.</div>
                    <div className="paragraph">Build encapsulated components that manage their own state, then compose them to make complex UIs.<br></br>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</div>
                </div>
            </div>
        )
    }
}
export default Home;