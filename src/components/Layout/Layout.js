import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: true,
    };

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false,
        });
    };

    sideDraweToggleHandler = () => {
        this.setState((perSate) => {
            return { showSideDrawer: !perSate.showSideDrawer };
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar
                    drawerToggleClicked={this.sideDraweToggleHandler}
                ></Toolbar>

                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}
                ></SideDrawer>
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
