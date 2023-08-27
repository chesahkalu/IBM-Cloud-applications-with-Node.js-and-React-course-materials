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
/*
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
*/


//Make an API call to  to a remote server https://api.publicapis.org/entries?category=Animals when the component mounts, and change the state when the remote server responds and display the list of APIs in the browser.
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = { APIlist:[] }

  componentDidMount() {
    let url = "https://api.publicapis.org/entries?category=Animals";
    axios({
      method: 'get',
      url: url,
      responseType: 'json'
    }).then(resp => {
        let listOfEntries = resp.data.entries;
        let listOfEntriesAsArray = Object.entries(listOfEntries);
        let entryDetails = listOfEntriesAsArray.map((entryDetail)=>{
          return <li style={{color: "green"}}>{entryDetail[1]["API"]}
          ------- {entryDetail[1]["Link"]} </li>
        })
        this.setState({APIlist:<ul>{entryDetails}</ul>})
      })
    .catch(err => {
        console.log(err.toString())
    });
  }

  render() {
    const colorStyle = { color:this.props.color,fontSize:this.props.size+"px"}
    return (
      <div style={colorStyle}>
        <h2>APIs List</h2>
        <br/>

        <div>
            {
            this.state.APIlist
            }
        </div>
    </div>
    );
  }
}

export default App;