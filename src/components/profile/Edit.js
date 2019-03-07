import React, {Component} from "react"
import styled from "styled-components";
import {Button} from "../../views/design/Button";
import {getDomain} from "../../helpers/getDomain";


const FormContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;

const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

class Edit extends Component{
    constructor() {
        super()
        this.state = {
            username: null,
            birthday: null
        }
    }

    handleInputChange(key, value) {
        this.setState({ [key]: value });
    }

    handleOnClickUsername = () => {
        fetch(`${getDomain()}/users/${this.props.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username
            })
        }).then(res => console.log(res)).then(() =>
        {
            window.location.reload()
        });
    };

    handleOnClickBirthday = () => {
        fetch(`${getDomain()}/users/${this.props.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                birthday: this.state.birthday
            })
        }).then(res => console.log(res)).then(() =>
        {
            window.location.reload()
        });
    };

    render() {
        if (localStorage.getItem("loggedInAsId") === this.props.id){
            return(
                <FormContainer>
                    <Label> Username </Label>
                    <InputField
                        placeholder="Enter here.."
                        onChange={e => {
                            this.handleInputChange("username", e.target.value);
                        }}
                    />
                    <Button onClick={this.handleOnClickUsername} disabled={!this.state.username}> Save </Button>

                    <Label> Birthday </Label>
                    <InputField
                        placeholder="Enter here.."
                        onChange={e => {
                            this.handleInputChange("birthday", e.target.value);
                        }}
                    />
                    <Button onClick={this.handleOnClickBirthday} disabled={!this.state.birthday}> Save </Button>
                </FormContainer>
            )
        }
        else{
            return(
                <h2>You can only edit your own profile</h2>
            )
        }
    }
}


export default Edit