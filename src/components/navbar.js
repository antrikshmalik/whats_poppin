import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar, { ElementsWrapper } from 'react-scrolling-nav';
import {MenuItems} from "./MenuItems";
import "./navbar.scss"

class navbar extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
     return(
       <nav className="NavbarItems">
           <h1 className="navbar-logo">What's Poppin</h1>
           <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}/>
           </div>
           <ul>
               {MenuItems.map((item, index) =>{
                   return(
                       <li key = {index}>
                           <a className={item.cName} href={item.url}>
                               {item.title}
                           </a>
                       </li>
                   )}
               )}
           </ul>
       </nav>
     );
    }
}

export default navbar;