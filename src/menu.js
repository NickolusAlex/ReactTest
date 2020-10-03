import React from 'react';
import './menu.css';
import ReactComp from './ReactComp';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Profile from './Profile';

const menuArray = ["HOME", "Component", "ABOUT", "CONTACT","PROFILE"]

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: 0,
    };
  }

  render() {
    return (
      <div>
        <ul>
            {console.log(this.props.logout)}
          {menuArray.map
            ((rowData, index) => (
              <li onClick={() => { this.setState({ selectedMenu: index }) }}>{rowData}</li>
            ))}
            <li className="logout" onClick={this.props.logout} >LOGOUT</li>
        </ul>
        <div className="content">
          {this.state.selectedMenu === 0 && <div><Home /></div>}
          {this.state.selectedMenu === 1 && <div><ReactComp /></div>}
          {this.state.selectedMenu === 2 && <div><About /></div>}
          {this.state.selectedMenu === 3 && <div><Contact /></div>}
          {this.state.selectedMenu === 4 && <div><Profile /></div>}
        </div>
      </div>
    )
  }
}
export default Menu;
