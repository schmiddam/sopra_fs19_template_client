import React from "react";
import styled from "styled-components";
import { BaseContainer } from "../../helpers/layout";
import { getDomain } from "../../helpers/getDomain";
import { Button } from "../../views/design/Button";
import Edit from "../../components/profile/Edit";
import {withRouter} from "react-router-dom";

const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
`;

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            loggedInUser: "",
            edit: false
        }
    }

    logout() {
        localStorage.removeItem("token");
        this.props.history.push("/login");
    }
    edit(){

    }

    handleOnClick = () => {
        this.setState((state) => {
            return {edit: !state.edit}
        })
    };

    componentDidMount() {
        fetch(`${getDomain()}/users/${localStorage.getItem("loggedInAsId")}`)
            .then(response => response.json())
            .then(user => this.setState({loggedInUser: user.username}));

        fetch(`${getDomain()}/users/${this.id}`)
            .then(response => response.json())
            .then(user => this.setState({user: user}))
    }

    render() {
        if (localStorage.getItem("token") == null ) {
            return (
                <h1> You must be logged in to see this page. </h1>
            )
        } else return (
            <Container>
                <h2> Welcome to your Profile! </h2>
                <p> Username: {this.props.location.state.reference.username} </p>
                <p> Status: {this.props.location.state.reference.status} </p>
                <p> Creation Date: {this.props.location.state.reference.CreationDate} </p>
                <p> Birthday: {this.props.location.state.reference.birthday} </p>
                <br />
                <Button
                    onClick={this.handleOnClick}>
                    Edit Profile
                </Button>
                {this.state.edit ? <Edit id={this.id}/> : null}
                <h5>Logged in as: {this.props.location.state.reference.username} </h5>
            </Container>
        )
    }
}

export default withRouter(Profile);