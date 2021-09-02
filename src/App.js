import React from 'react';
import './App.css';
import TableContainer from './Table/TableContainer';
import SearchContainer from './Search/SearchContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchContainer />
        <TableContainer />
      </div>
    );
  }
}

export default App;
