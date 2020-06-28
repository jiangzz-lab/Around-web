import React, {Component} from 'react';
import logo from "../assets/images/logo.svg";

import { Icon } from 'antd';

class TopBar extends Component {
    render() {
        return (
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className="App-title">Around</span>


                        <a className="logout" onClick={this.props.handleLogout} >
                            <Icon type="logout" />{' '}Logout
                        </a>

                </header>
        );
    }
}

export default TopBar;