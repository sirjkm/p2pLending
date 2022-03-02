import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Borrow = props => (
    <tr>
        <td>{props.borrow.username}</td>
        <td>{props.borrow.amount}</td>
        <td>{props.borrow.duration}</td>
        <td>{props.borrow.date.substring(0, 10)}</td>
        <td>
            <Link to={'/edit/'+props.borrow._id}>edit</Link> | <a href='#' onClick={() => { props.deleteBorrow(props.borrow._id) }}>delete</a>
        </td>
    </tr>
)

export default class BorrowLendList extends React.Component {
    constructor(props) {
        super(props);

        this.deleteBorrow = this.deleteBorrow.bind(this);

        this.state = { borrow: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/borrow/')
            .then(response => {
                this.setState({ borrow: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteBorrow(id) {
        axios.delete('http://localhost:5000/borrow/' + id)
            .then(res => console.log(res.data));
        this.setState({
            borrow: this.state.borrow.filter(el => el._id !== id)
        })
    }

    BorrowList() {
        return this.state.borrow.map(currentborrow => {
            return <Borrow borrow={currentborrow} deleteBorrow={this.deleteBorrow} key={currentborrow._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Requests</h3>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Username</th>
                            <th>Amount</th>
                            <th>Duration</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.BorrowList() }
                    </tbody>
                </table>
            </div>
        )
    }
}