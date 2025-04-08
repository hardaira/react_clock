import React from 'react';
import './App.scss';

type ClockProps = {
  name: string;
  today: Date;
};
type State = {
  //clockName: string;
  today: Date;
};

export class Clock extends React.PureComponent<ClockProps> {
  state: State = {
    //clockName: 'Clock-0',
    today: new Date(),
  };

  todayIntervalId: number | undefined;

  componentDidMount(): void {
    this.todayIntervalId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    //if (this.state.hasClock) {
    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }

    //if (prevState.clockName !== this.state.clockName) {
    // eslint-disable-next-line no-console
    //console.warn(
    // `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
    //);
    //}
  }

  componentWillUnmount(): void {
    window.clearInterval(this.todayIntervalId);
  }

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
