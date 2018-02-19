import React, { Component } from 'react';
import '../styles/components/Post.css';

const URL = "http://localhost:8081";

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: 0,
            firstName: "",
            lastName: "",
            dd: 0,
            mm: 0,
            year: 0,
            email: "",
            countryCode: 0,
            phone: 0
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
                this.setState({success: 1});
            });
    }

    successMsg() {
        const send = this.state.success;
        if (send) return (<label>Success!</label>);
        else return (<label>No successful request sent</label>);
    }

    // handleChange(e) {
    //     var newState = this.state;
    //     newState[e.target.name] = e.target.value;
    //     this.setState(newState);
    // }

    render() {
        return(
            <div id="form_container">
                <form id="createPostform" onSubmit={this.sendPost}>
                        <label>First Name</label><input name="firstName" onChange={this.handleChange} type="text" className="form-control"/>                 
                        <label>Last Name</label><input name="lastName" type="text" className="form-control"/>
                        <label>DD</label><input name="dd" type="text" className="form-control"/>

                        <label>MM</label><input name="mm" type="text" className="form-control"/>

                        <label>Year</label><input name="year" type="text" className="form-control"/>

                        <label>Email</label><input name="email" type="text" className="form-control"/>

                        <label>Country Code</label><input name="countryCode" type="text" className="form-control"/>

                        <label>Phone</label><input name="phone" type="text" className="form-control"/>
                    <div className="create_btn_container">
                        <input type="submit" className="btn btn-primary create_btn" value="Submit" />
                    </div>
                    {this.successMsg()}
                    </form>
            </div>
            );
    }
}

export default Post;