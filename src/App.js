import React from 'react';
import './App.css';
import TableContainer from './Table/TableContainer';
import SearchContainer from './Search/SearchContainer';
import Pagination from './Pagination/Pagination';
import { Route, BrowserRouter, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SearchContainer />
          <Switch>
            <Route path='/crazy-panda/page/1' component={TableContainer} />
            <Route path='/crazy-panda/page/2' component={TableContainer} />
            <Route path='/crazy-panda/page/3' component={TableContainer} />
          </Switch>
          <Pagination />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
