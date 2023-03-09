import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      aaa: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    console.log('componentDidMount', this.timerID);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.timerID);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('componentWillUnmount');
  }

  tick() {
    // this.setState({
    //   date: new Date()
    // });
    this.setState({
      aaa: this.state.aaa + 1
    });
    
    console.log('tick', this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
        <h2>It is {this.state.aaa}.</h2>
      </div>
    );
  }
}