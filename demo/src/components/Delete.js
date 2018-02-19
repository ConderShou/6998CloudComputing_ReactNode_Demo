import React, { Component } from 'react';
import '../styles/components/Delete.css';

const URL = "http://localhost:8081";

class Delete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            success: 0,
            data: {}
        }

        this.deletePerson = this.deletePerson.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderNewData = this.renderNewData.bind(this);
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
                this.setState({success: 1, data: data});
            });
    }

    handleChange(e) {
        var newState = this.state;
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    renderNewData() {
        const sent = this.state.success;
        if (!sent) {
            return (
                <label>No successful request sent</label>
            );
        } else {
            const data = this.state.data;

            return Object.keys(data).map(function (key) {

                console.log("user: ", data[key]);
                // var personId = user.personId;
                // var firstName = user.firstName;
                // etc....
                const { personId, firstName, lastName, dd, mm, year, email, countryCode, phone } = data[key];

                console.log("ID:", personId);
                return (
                    /* React requires a key when the user is outputting objects from iteration */
                    <tr key={personId}>
                        <td>{personId}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{dd}</td>
                        <td>{mm}</td>
                        <td>{year}</td>
                        <td>{email}</td>
                        <td>{countryCode}</td>
                        <td>{phone}</td>
                    </tr>
                    );
            });
        }
    }
            

    render() {
        return(
            <div id="Delete-form_container">
                <label>ID</label><input type="text" name="id" value={this.state.id} onChange={this.handleChange}/>
                <div className="Delete-create_btn_container">
                    <button className="btn btn-primary Delete-create_btn" onClick={this.deletePerson}>Submit</button>
                </div>
                <tbody>
                    {this.renderNewData()}
                </tbody>            
            </div>
            );
    }
}

export default Delete;