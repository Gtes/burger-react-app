import React from "react";
import PropTypes from "prop-types";

import classes from "./BurgerIngredient.css";

const burgerIngridient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case "bread-bottom":
            ingredient = <div className={classes.BreadBottom}></div>;
            break;

        case "bread-top":
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;

        case "meat":
            ingredient = <div className={classes.meat}></div>;
            break;

        case "cheese":
            ingredient = <div className={classes.cheese}></div>;
            break;

        case "salad":
            ingredient = <div className={classes.salad}></div>;
            break;

        case "bacon":
            ingredient = <div className={classes.bacon}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

burgerIngridient.protoTypes = {
    type: PropTypes.string.isRequired
}

export default burgerIngridient;
