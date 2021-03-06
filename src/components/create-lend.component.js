import React from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateLend extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeLender = this.onChangeLender.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            lender: '',
            amount: 0,
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username,
                        lender: response.data[0].lender
                })
            }
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeLender(e) {
        this.setState({
            lender: e.target.value
        });
    }

    onChangeAmount(e) {
        this.setState({
            amount: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const lend = {
            username: this.state.username,
            lender: this.state.lender,
            amount: this.state.amount,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(lend);

        axios.post('http://localhost:5000/lend/add', lend)
            .then(res => console.log(res.data));

        window.location = '/';
    }
    
    render() {
        return (
            <div>
                <h3>Offer a Loan</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Lender: </label>
                        <select
                            required
                            className="form-control"
                            value={this.state.lender}
                            onChange={this.onChangeLender}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Borrower: </label>
                        <select
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Amount: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.amount}
                            onChange={this.onChangeAmount}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker 
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create a New Request" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}