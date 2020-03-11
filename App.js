import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const weekdays = days.map((data, key) => {
    return (
      <tr>
        <td> {data} </td> 
       </tr>
    );
      
  });

  return (
    <div className="App">
      <table> 
        <thead> 
          <tr>
            <th> Weekdays </th>
          </tr>
        </thead> 
        <tbody> {weekdays} </tbody>
      </table>
    </div>
  );
}

export default App;
