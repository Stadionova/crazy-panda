import React from 'react';
import './App.css';
import TableContainer from './Table/TableContainer';
import SearchContainer from './Search/SearchContainer';
import Pagination from './Pagination/Pagination';
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    // <BrowserRouter>
    <div className="App">
      <SearchContainer />
      <Switch>
        <Route path='/1' component={TableContainer} />
        <Route path='/2' component={TableContainer} />
        <Route path='/3' component={TableContainer} />
        <Route path='/' component={TableContainer} />
      </Switch>
      <Pagination />
    </div>
    // </BrowserRouter>
  );
}

export default App;
