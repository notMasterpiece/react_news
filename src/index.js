import './assets/styles/main.scss';


import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import App from './js/components/App.jsx';
import Javascript from './js/components/Javascript';
import Node from './js/components/Node';
import Test from './js/components/test';




const Root = () => {
    return (
        <Router>
            <div>

                <NavLink activeClassName="selected" to="/javascript">JavaScript</NavLink>

                <NavLink activeClassName="selected" to="/node">Node</NavLink>


                {/*<Navbar>*/}
                    {/*<Navbar.Header>*/}

                        {/*<Navbar.Brand>*/}
                            {/*<Link to="/">Home</Link>*/}
                        {/*</Navbar.Brand>*/}


                        {/*<Navbar.Toggle />*/}
                    {/*</Navbar.Header>*/}

                    {/*<Navbar.Collapse>*/}
                        {/*<Nav>*/}
                            {/*<NavItem>*/}
                                {/*<NavLink activeClassName="selected" to="/javascript">JavaScript</NavLink>*/}
                            {/*</NavItem>*/}
                            {/*<NavItem>*/}
                                {/*<NavLink activeClassName="selected" to="/node">Node</NavLink>*/}
                            {/*</NavItem>*/}
                        {/*</Nav>*/}
                    {/*</Navbar.Collapse>*/}
                {/*</Navbar>*/}



                <Route exact path="/" component={App}/>
                <Route path="/javascript" component={Javascript}/>
                <Route path="/node" component={Node}/>
            </div>
        </Router>
    )
};

ReactDOM.render(
  <Test
    name='Vasa'
  />,
  document.getElementById('app')
);