import React from "react";

import Aux from "../../hoc/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => {
    return (
        <Aux>
            <Toolbar></Toolbar> 
            <SideDrawer></SideDrawer>
            <main className={classes.Content}>{props.children}</main>
        </Aux>
    );
};

export default layout;
