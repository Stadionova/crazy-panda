import React from 'react';
import './App.css';
import TableContainer from './Table/TableContainer';
import SearchContainer from './Search/SearchContainer';
import Pagination from './Pagination/Pagination';
import { Route, BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render(props) {
    return (
      <BrowserRouter>
        <div className="App">
          <SearchContainer />
          <Route path='/page/1' component={TableContainer} />
          <Route path='/page/2' component={TableContainer} />
          <Route path='/page/3' component={TableContainer} />
          <Route path='/page/4' component={TableContainer} />
          <Route path='/page/5' component={TableContainer} />
          <Route path='/page/6' component={TableContainer} />
          {/* <TableContainer /> */}
          <Pagination />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
