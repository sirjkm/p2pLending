import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import BorrowLendList from './components/borrow-lend-list.component';
import EditBorrow from './components/edit-borrow.component';
import CreateBorrow from './components/create-borrow.component';
import EditLend from './components/edit-lend.component';
import CreateLend from './components/create-lend.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
          <br />
            <Route path='/' exact component={BorrowLendList} />
            <Route path='/edit-borrow/:id' exact component={EditBorrow} />
            <Route path='/edit-lend/:id' exact component={EditLend} />
            <Route path='/borrow' exact component={CreateBorrow} />
            <Route path='/lend' exact component={CreateLend} />
          <Route path='/user' exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;