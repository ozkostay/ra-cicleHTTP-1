
import React from 'react';

export default class ClassApp extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Constructor");
    this.state = {
      aaa: 0
    }
    
    // this.t1 = 'w';

  }

  // static getDerivedStateFromProps() {
  //   console.log("getDerivedStateFromProps");
  //   // console.log('444', this.t1);
  //   return null ;
  // }

  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setTimeout(
      () => this.aaaPluse(),
      1000
      );
    console.log('555', this.timer);
    // return () => {
    //   // window.clearTimeout(this.t1);
    // }
  }

  // aaaPluse() {
  //   console.log('aaaPluse');
  //   // this.setState.aaa = 3;
  //   this.setState({ aaa: ++this.state.aaa });
  // }
  aaaPluse = () =>  {
    console.log('aaaPluse');
    // this.setState.aaa = 3;
    // let bbb = this.state.aaa + 1;
    this.setState({ aaa: this.state.aaa + 1});
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timer);
  }

  render() {
    console.log("Render");
    return (<>
      <h1>Xnjnj {this.state.aaa}</h1>
      {/* <button onClick={this.aaaPluse}>{this.state.aaa}</button> */}
    </>)
  }
}
