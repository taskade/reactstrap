import React from 'react';
import classNames from 'classnames';
import TooltipPopoverWrapper, { propTypes } from './TooltipPopoverWrapper';

const defaultProps = {
  placement: 'right',
  placementPrefix: 'bs-popover',
  trigger: 'click',
};

const Popover = React.forwardRef((props, ref) => {
  const popperClasses = classNames(
    'popover',
    'show',
    props.className
  );

  const classes = classNames(
    'popover-inner',
    props.innerClassName
  );


  return (
    <TooltipPopoverWrapper
      {...props}
      ref={ref}
      className={popperClasses}
      innerClassName={classes}
    />
  );
});

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;


export default Popover;
