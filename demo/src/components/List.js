import React, { Component } from 'react';
import '../styles/components/List.css';

const URL = "http://localhost:8081";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: {}
        }

        this.getUsers = this.getUsers.bind(this);
        this.loadUsers = this.loadUsers.bind(this);
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        var request = new Request(URL + '/listPersons', {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });

        fetch(request)
            .then(response => response.json())
            .then(data => {
                console.log("Data: ", data);
                this.setState({users: data});
            });
    }

    loadUsers() {
        const { users } = this.state;

        if (!users) {
            console.log("NO users: ", this.state.users);
            return (<tr><td>Loading...</td></tr>);
        }

        console.log("Got Users: ", users);
        return Object.keys(users).map(function (key) {

                console.log("user: ", users[key]);
                // var personId = user.personId;
                // var firstName = user.firstName;
                // etc....
                const { personId, firstName, lastName, dd, mm, year, email, countryCode, phone } = users[key];

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

    render() {
        return(
            <div>
                <table className="display_table">
                  <thead>
                      <tr>
                        <th>ID</th>
                        <th>First Name</th> 
                        <th>Last Name</th>
                        <th>DD</th>
                        <th>MM</th>
                        <th>Year</th>
                        <th>Email</th>
                        <th>Country Code</th>
                        <th>Phone</th>
                      </tr>
                  </thead>
                  <tbody>
                    {this.loadUsers()}
                  </tbody>
                </table>
            </div>
        );
    }
}

export default List;