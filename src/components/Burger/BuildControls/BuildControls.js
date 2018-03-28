import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';


const controls = [
    { label: 'Salade', type: 'salad' },
    { label: 'Bacon',  type: 'bacon' },
    { label: 'Fromage', type: 'cheese' },
    { label: 'Viande', type: 'meat' },
];

const buildControls = (props) => (
    <div className= {classes.BuildControls}>
        <p>Prix: <strong>{props.price.toFixed(2)}€</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key ={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientsAdded(ctrl.type)}
            removed ={() => props.ingredientsRemoved(ctrl.type)}
            disabled ={props.disabled[ctrl.type]} />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>COMMANDEZ</button>
    </div>
);

export default buildControls;