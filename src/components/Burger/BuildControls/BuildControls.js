import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import buildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Chicken', type: 'chicken' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        disable={props.disabled[ctrl.type]}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
      />
    ))}
    <button
      disabled={!props.perchasable}
      onClick={props.ordered}
      className={classes.OrderButton}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
