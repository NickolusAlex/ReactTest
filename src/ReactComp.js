import React from 'react';
import './menu.css';

class ReactComp extends React.Component {
    render() {
        return (
            <div >
                <div className="outercontainer">
                    <div className="Heading">Component Intro</div>
                    <div className="paragraph">React components implement a <code>render()</code> method that takes input data and returns what to display.<br></br> This example uses an XML-like syntax called JSX.
                    <br></br> Input data that is passed into the component can be accessed by <code>render()</code> via <code>this.props</code>.<br></br>JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.</div>
                    <div className="paragraph">In addition to taking input data (accessed via <code>this.props</code>), a component can maintain internal state data (accessed via <code>this.state</code>). When a component’s state data changes, the rendered markup will be updated by re-invoking In addition to taking input data (accessed via <code>this.props</code>), a component can maintain internal state data (accessed via <code>this.state</code>). When a component’s state data changes, the rendered markup will be updated by re-invoking <code>render()</code>..</div>
                </div>
            </div>
        )
    }
}
export default ReactComp;