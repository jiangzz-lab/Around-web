import React, {Component} from 'react';
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    getLogin = () => {
        return this.props.isLoggedIn ? <Redirect to="/home"/> :
            <Login handleLoginSucceed={this.props.handleLoginSucceed}/>;
    }

    getHome = () => {
        return this.props.isLoggedIn ? <Home/> :
            <Redirect to="/login"/>
    }

    render() {
        return (
            <Switch>
                <Route path="/login" render={this.getLogin} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={this.getHome} />

                <Route render={this.getLogin} />
            </Switch>
        );
    }
}

export default Main;