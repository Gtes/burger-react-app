import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.module.css";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Chees", type: "cheese" },
    { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map((ctrl) => (
            <BuildControl
                added={() => props.ingredtientAdded(ctrl.type)}
                removed={() => props.ingredtientRemoved(ctrl.type)}
                key={ctrl.label}
                label={ctrl.label}
                disabled={props.disabled[ctrl.type]}
            ></BuildControl>
        ))}
    </div>
);

export default buildControls;
