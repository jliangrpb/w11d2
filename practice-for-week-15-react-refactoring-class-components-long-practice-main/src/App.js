import React, { useState,useEffect } from 'react';
import Clock, { ClockToggle } from './components/Clock';
import Folder from './components/Folder';
import Weather from './components/Weather';
import Autocomplete from './components/Autocomplete';

const names = [
  'Abba',
  'Barbara',
  'Barney',
  'Jeff',
  'Jenny',
  'Sally',
  'Sarah',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showClock: true
//     };
//   }
  function App() {
    const [showClock, setShowClock] = useState(true)

    useEffect(() => {
      console.log("Clock mounted")


    })
    
    const clickHandler = e => {
      e.preventDefault();

      setShowClock((showClock)=> !showClock );
    }

    return (
      <div className="widgets">
        <Folder folders={folders} />
        <Weather />
        {/* <ClockToggle toggleClock={this.toggleClock} />
        {this.state.showClock && <Clock />} */}
        <button onClick={clickHandler} > Toggle Clock</button>
        {showClock && <Clock />}
        <Autocomplete names={names} />
      </div>
    );
  }
  
  
  // render () {
  // }
// }


export default App;