import React from 'react';
import './App.scss';

type ClockProps = {
  name: string;
  today: Date;
};

export class Clock extends React.PureComponent<ClockProps> {
  render() {
    const { name, today } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
