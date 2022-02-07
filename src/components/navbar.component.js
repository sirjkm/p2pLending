import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">P2P Lending</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="navbar-brand">P2P Lending</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/CreateBorrow" className="navbar-brand">Borrow</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/CreateLend" className="navbar-brand">Lend</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/CreateUser" className="navbar-brand">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}