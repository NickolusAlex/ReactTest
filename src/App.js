import React from 'react';
import './App.css';
import Menu from './menu.js';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      password: "",
      menuEnable: false,
      forgotPassword: false,
    };
  }
  render() {

    const handleUser = (e) => {
      this.setState({ userid: e.target.value })
      // {console.log(e)}
    }
    const handlePassword = (e) => {
      this.setState({ password: e.target.value })
    }

    const submithandling = () => {
      console.log(this.state.userid, this.state.password);
      if (
        // (this.state.userid === "nick" && this.state.password === "nick") ||
        (this.state.userid === "admin" && this.state.password === "admin")
      ) {
        alert("do not refresh the page");
        this.setState({ menuEnable: true })
      }
      else {
        alert("Wrong password");
      }
    }

    const logout = () => {
      this.setState({ menuEnable: false })
    }

    const forgotpassword = () => {
      this.setState({ forgotPassword: true })
    }

    return (
      <div className="App">

        {this.state.menuEnable ? <Menu logout={logout} /> :
          <form onSubmit={submithandling}>

            <h1>LOGIN</h1>
            <span className="icons"><AccountCircleIcon fontSize="medium" /></span>
            <input type="text" placeholder="UserId" onChange={(e) => handleUser(e)} />
            <br></br>
            <LockOpenIcon className="icons" />
            <input type="password" placeholder="Password" onChange={(e) => handlePassword(e)} /><br></br>
            <button id="submit" type="submit" >Login </button><br></br>
            <div className="helpbox">
              <label onClick={() => forgotpassword()}>Forgort password ?</label>
              <label>|</label>
              <label>Need Help ?</label>
            </div>

          </form>
        }

      </div>
    );
  }
}
export default App;
