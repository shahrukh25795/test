import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import LogIn from "./login";
import Home from "./home";
import Cookie from "js.cookie"
import ProviderContext, { MyContext } from "./context";

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
            <ProviderContext>
            <MyContext.Consumer>
                {(context) => (
                    <Router>
                        <Switch location={location}>
                            <React.Fragment>
                                <Route exact path="/" component={props => (Cookie.get("token")!== null) ? <Redirect to="/home"/> : <LogIn {...props}/>}/>
                                <Route exact path="/home" component={props => (Cookie.get("token")== null) ? <Redirect to="/"/> : <Home {...props}/>}/>
                        </React.Fragment>
                        </Switch>
                    </Router>
                )}
            </MyContext.Consumer>
        </ProviderContext>
                // <Router>
                //     <Switch>
                //         <Route exact path="/" component={props => (Cookie.get("token")!== null) ? <Redirect to="/home"/> : <LogIn {...props}/>}/>
                //         <Route exact path="/home" component={props => (Cookie.get("token")== null) ? <Redirect to="/"/> : <Home {...props}/>}/>
                //     </Switch>
                // </Router>
        );
    }
}