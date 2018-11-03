import * as React from 'react';
import cn from 'classnames';

const Panel = (props: Props) => (
  <div className="panel">
    <a onClick={props.toggleOpen}>
      {props.title}- click to {props.opened ? 'close' : 'open'}
    </a>
    <div className={cn('panel-text', !props.opened && 'closed')}>{props.text}</div>
  </div>
);

export default Panel;
