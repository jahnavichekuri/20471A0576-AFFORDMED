import React from 'react';
import moment from 'moment';
import './App.css';

function App() {
  const trainSchedule = [
    { trainNumber: '123', destination: 'City A', departureTime: '09:00 AM' },
    { trainNumber: '456', destination: 'City B', departureTime: '10:30 AM' },
    { trainNumber: '789', destination: 'City C', departureTime: '12:15 PM' },
  ];

  return (
    <div className="App">
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Destination</th>
            <th>Departure Time</th>
          </tr>
        </thead>
        <tbody>
          {trainSchedule.map((train) => (
            <tr key={train.trainNumber}>
              <td>{train.trainNumber}</td>
              <td>{train.destination}</td>
              <td>{moment(train.departureTime, 'hh:mm A').format('hh:mm A')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
          }

export default App;