import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Membership from "./Membership";
import Redeem from "./Redeem";
import History from "./History";
import Contact from "./Contact";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Lashify</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/membership">Membership</NavLink></li>
            <li><NavLink to="/redeem">Redeem Points</NavLink></li>
            <li><NavLink to="/history">Transaction History</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/membership" component={Membership}/>
            <Route path="/redeem" component={Redeem}/>
            <Route path="/history" component={History}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;