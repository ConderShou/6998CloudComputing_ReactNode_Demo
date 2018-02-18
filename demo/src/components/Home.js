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
                <button className="btn btn-primary list-btn"><Link to='/list'>List</Link></button>
                <button className="btn btn-secondary post-btn"><Link to='/post'>Post</Link></button>
                <button className="btn btn-info update-btn"><Link to='/update'>Update</Link></button>
                <button className="btn btn-danger update-btn"><Link to='/delete'>Delete</Link></button>
            </div>
            );
    }
}

export default Home;