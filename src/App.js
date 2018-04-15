import React, { Component } from "react";
import Homepage from "./components/Homepage";


import {
  Layout,
  Header,
  Navigation,
  Drawer
} from "react-mdl";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <div style={{}}>
          <Layout fixedHeader>
            <Header transparent title={ <a href="/"><img src="././assets/white-logo.png" /></a>}>
              <Navigation className="navigation-head">
                <a href="#" className="nav-link-font hide-xs">
                  Home
                </a>
                <a href="#" className="nav-link-font hide-xs">
                  Solution
                </a>
                <a href="#" className="nav-link-font hide-xs">
                  Technology
                </a>
                <a href="#" className="nav-link-font hide-xs">
                  Contact
                </a>
                <button href="#" className="nav-link-font btn btn-outline  ">
                  Login
                </button>
              </Navigation>
            </Header>
            <Drawer>
              <Navigation className="drawer-nav">
                <a href="#" className="nav-link-font">
                  Home
                </a>
                <a href="#" className="nav-link-font">
                  Solution
                </a>
                <a href="#" className="nav-link-font">
                  Technology
                </a>
                <a href="#" className="nav-link-font">
                  Contact
                </a>
                
              </Navigation>
            </Drawer>
          </Layout>
        </div>
        <Homepage />
      </div>
    );
  }
}
export default App;
