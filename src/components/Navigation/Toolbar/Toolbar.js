import React from "react";
import Logo from "../../Logo/Logo"
import NavigationIrems from "../NavigationItems/NavigationItems"

import classes from "./Toolbar.module.css";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo></Logo>
        <NavigationIrems></NavigationIrems>
    </header>
);

export default toolbar;
