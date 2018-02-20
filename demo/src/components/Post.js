import React, { Component } from 'react';
import '../styles/components/Post.css';

const URL = "http://localhost:8081";

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: 0,
            data: {}
        }
        this.sendPost = this.sendPost.bind(this);
        this.successMsg = this.successMsg.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    sendPost(event) {
        event.preventDefault();
        var formData = new FormData(event.target);

        var data = {}
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        var request = new Request(URL + '/addPerson', {
            method: 'POST',
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
                this.setState({data: data, success: 1});
            });
    }

    successMsg() {
        const sent = this.state.success;
        if (sent) {
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
        else return (<label>No successful request sent</label>);
    }

    // handleChange(e) {
    //     var newState = this.state;
    //     newState[e.target.name] = e.target.value;
    //     this.setState(newState);
    // }

    render() {
        return(
            <div id="Post-form_container">
                <form id="createPostform" onSubmit={this.sendPost}>
                        <label>First Name</label><input name="firstName" type="text" className="form-control"/>                 
                        <label>Last Name</label><input name="lastName" type="text" className="form-control"/>
                        <label>DD</label><input name="dd" type="text" className="form-control"/>

                        <label>MM</label><input name="mm" type="text" className="form-control"/>

                        <label>Year</label><input name="year" type="text" className="form-control"/>

                        <label>Email</label><input name="email" type="text" className="form-control"/>

                        <label>Country Code</label><input name="countryCode" type="text" className="form-control"/>

                        <label>Phone</label><input name="phone" type="text" className="form-control"/>
                    <div className="Post-create_btn_container">
                        <input type="submit" className="btn btn-primary Post-create_btn" value="Submit" />
                    </div>
                    <tbody>
                        {this.successMsg()}
                    </tbody>
                    </form>
            </div>
            );
    }
}

export default Post;