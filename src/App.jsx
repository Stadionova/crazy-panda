import React from 'react';
import './App.css';
import TableContainer from './Table/TableContainer';
import SearchContainer from './Search/SearchContainer';
import Pagination from './Pagination/Pagination';
import { Route, BrowserRouter, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchContainer />
        <Switch>
          <Route path='/crazy-panda/1' component={TableContainer} />
          <Route path='/crazy-panda/2' component={TableContainer} />
          <Route path='/crazy-panda/3' component={TableContainer} />
          <Route path='/' component={TableContainer} />
        </Switch>
        <Pagination />
      </div>
    </BrowserRouter>
  );
}

export default App;
