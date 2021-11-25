import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import APIURL from "../../helpers/environment";
import "../../styles/DeleteAccount.css";

const DeleteAccountComponent = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const triggerUsernameInputChange = (event) => setUsername(event.target.value);
  const triggerPasswordInputChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username && password) {
      fetch(`${APIURL}user/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      })
        .then((response) => {
          setModal(false);
          localStorage.clear("sessionToken");
          props.loggedOut(false);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <Form>
        <h6 color="danger" className="deleteAccount" onClick={toggle}>
          Delete Account
        </h6>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Delete Account</ModalHeader>
          <ModalBody>
            Are you sure you want to delete your account?
            <FormGroup>
              <Label htmlFor="confirmUsername">Confirm Username: </Label>
              <Input
                onChange={triggerUsernameInputChange}
                value={username}
                id="confirmUsername"
                type="text"
                name="confirmUsername"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="confirmPassword">Confirm Password: </Label>
              <Input
                onChange={triggerPasswordInputChange}
                value={password}
                id="confirmPassword"
                type="password"
                name="confirmPassword"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>
              I'm sure, Bye!
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Form>
    </div>
  );
};

export default DeleteAccountComponent;
