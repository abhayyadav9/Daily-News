import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light',
    };
  }

  toggleMode = () => {
    const { mode } = this.state;
    if (mode === 'light') {
      this.setState({
        mode: 'dark',
      });
      document.body.style.backgroundColor = '#004880';
      // showAlert("Dark Mode Enable", "success");
    } else {
      this.setState({
        mode: 'light',
      });
      document.body.style.backgroundColor = 'white';
      // showAlert("Light Mode Enable", "success");
    }
  };

  render() {
    const { mode } = this.state;

    return (
      <div>
        <Router>
          <Navbar
            title="Text converter"
            about="about me"
            mode={mode}
            toggleMode={this.toggleMode}
          />

          <News />

          <Switch>
          <Route exact path="/home"> <News key="home" pageSize={5} country="in" category="home"/></Route>
          <Route exact path="/business"><News key="business" pageSize={5} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" category="entertainment"/></Route>
          <Route exact path="/general"> <News key="general" pageSize={5} country="in" category="general"/></Route>
          <Route exact path="/science"> <News key="science" pageSize={5} country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" pageSize={5} country="in" category="sports"/></Route>
          <Route exact path="/technology"> <News key="technology" pageSize={5} country="in" category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
