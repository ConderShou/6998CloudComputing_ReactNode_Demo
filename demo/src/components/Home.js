import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to='/list'>
                    <button className="btn btn-primary list-btn">List</button>
                </Link>
                <Link to='/post'>
                    <button className="btn btn-secondary post-btn">Post</button>
                </Link>
                <Link to='/update'><button className="btn btn-info update-btn">Update</button></Link>
                <Link to='/delete'><button className="btn btn-danger update-btn">Delete</button></Link>
            </div>
            );
    }
}

export default Home;