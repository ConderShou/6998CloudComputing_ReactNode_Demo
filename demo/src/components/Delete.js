import React, { Component } from 'react';
import '../styles/components/Delete.css';

const URL = "http://localhost:8081";

class Delete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            success: 0
        }

        this.deletePerson = this.deletePerson.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.successMsg = this.successMsg.bind(this);
    }

    deletePerson() {

        const data = {
            personId: this.state.id
        }

        var request = new Request(URL + '/deletePerson', {
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });

        fetch(request)
            .then(response => response.json())
            .then(data => {
                console.log("Data: ", data);
                this.setState({success: 1});
            });
    }

    handleChange(e) {
        var newState = this.state;
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    successMsg() {
        const sent = this.state.success;
        if (sent) return (<label>Success!</label>);
        else return (<label>No successful request sent</label>);
    }

    render() {
        return(
            <div id="Delete-form_container">
                <label>ID</label><input type="text" name="id" value={this.state.id} onChange={this.handleChange}/>
                <div className="Delete-create_btn_container">
                    <button className="btn btn-primary Delete-create_btn" onClick={this.deletePerson}>Submit</button>
                </div>
                {this.successMsg()}
            </div>
            );
    }
}

export default Delete;