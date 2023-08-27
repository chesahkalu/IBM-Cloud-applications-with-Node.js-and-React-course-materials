/*
function App() {
  return (
    <div>
      Hello World!
    </div>
  );
}

export default App;
*/

//Make app.js a functional component

/*
function App(props) {
  const colorStyle = {
    color:props.color,
    fontSize:props.size+"px"
  }
  return (
    <div>
      <div style={colorStyle}>
      Hello World!
      </div>
    </div>
  );
}

export default App;
*/

//Make app.js a class component

/*
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const colorStyle = {
    color:this.props.color,
    fontSize:this.props.size+"px"
    }
    return (
      <div>
        <div style={colorStyle}>
        Hello World!
        </div>
      </div>
    );
  }
}

export default App;
*/

//set the props from outside and maintain the state of the component inside. The state we will maintain is the number of times the button was clicked. 
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { counter:0 }

  incrementCounter = ()=> {
    this.setState({counter:this.state.counter+1});
  }

  render() {
    const colorStyle = { color:this.props.color,fontSize:this.props.size+"px"}
    return (
      <div style={colorStyle}>
        React Component
        <br /><br />
        <button onClick={this.incrementCounter}>Click Me!</button>
        <br /><br />
        {this.state.counter}
      </div>
    );
  }
}

export default App;