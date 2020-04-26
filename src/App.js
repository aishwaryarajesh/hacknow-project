//import React from 'react';
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

import React from 'react';
import TimeField from 'react-simple-timefield';
import { Column, Row } from "simple-flexbox";

class App extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
        activities: [],
        time: '00:00'
    };

    this.onTimeChange = this.onTimeChange.bind(this);
  }

  onTimeChange(event, time) {
    this.setState({time});
  }

  componentDidMount() {
    this.setState({
      activities: [
        {id: 'STU', name: 'Studying'},
        {id: 'SOC', name: 'Socializing'},
        {id: 'EAT', name: 'Eating'},
        {id: 'WORK',name: 'Working Out'}
      ]
    });
  }


  render() {
    const {time, activities} = this.state;

    let activitiesList = activities.length > 0
      && activities.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    return (
      <Column style={{ width: "100%" }}>
        <Row>
          <Column
            flexGrow={0.2}
            style={{ backgroundColor: "#9a9db3" }}
            vertical = 'center'
            horizontal = 'center'
         >
           <span>
           <TimeField value={time} onChange={this.onTimeChange} />
           <select>
             {activitiesList}
           </select>
           <TimeField value={time} onChange={this.onTimeChange} />
           </span>
           <span>
           <TimeField value={time} onChange={this.onTimeChange} />
           <select>
             {activitiesList}
           </select>
           <TimeField value={time} onChange={this.onTimeChange} />
           </span>
         </Column>

          <Column
          flexGrow={1}
          style={{ backgroundColor: "#c4b8b1" }}
          >
          <span> Content 3 </span>
          <span> Content 4 </span>
          <span> Content 5 </span>
          </Column>
        </Row>
      </Column>
    );
    }
    }

export default App
