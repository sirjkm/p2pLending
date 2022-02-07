import React from 'react';
import { BrowswerRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import BorrowLendList from "./components/borrow-lend-list.component";
import CreateBorrow from "./components/create-borrow.component";
import CreateLend from "./components/create-lend.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar>
        <br />
          <Route path='/' exact component={BorrowLendList} />
          <Route path='/borrow' exact component={CreateBorrow} />
          <Route path='/lend' exact component={CreateLend} />
          <Route path='/user' exact component={CreateUser} />
      </Navbar>
    </Router>
  );
}

export default App;