import React from "react";
import './Clock.css';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.shift = props.item.shift;
  }

  componentDidMount() {
    this.setState({
      date: this.selectedZone()
    });

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate', this.timerID);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  selectedZone() {
    const milliseconds = 60 * 60 * 1000;
    const now = new Date();
    const localTimeZone = now.getTimezoneOffset() / 60;
    const dateUTC = new Date(now.getTime() + (localTimeZone * milliseconds));
    const dateToReturn = new Date(dateUTC.getTime() + (this.shift * milliseconds));
    return dateToReturn;
  }

  tick() {
    this.setState({
      date: this.selectedZone()
    });
  }

  render() {
    const {fnDelete, tempDel, item} = this.props;
    return (
      <div className='cicle-wrrap'>
        <div onClick={() => tempDel()}><h5 className='title-cicle'>{item.name} {item.shift}</h5></div>
        <div className='big-cicle'>
          <h2>{this.state.date.toLocaleTimeString()}.</h2>
          <div className='little-cicle' onClick={() => fnDelete(item.id)}>X</div>
        </div>
      </div>
    );
  }
}