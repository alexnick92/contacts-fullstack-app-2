import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link, NavLink } from "react-router-dom";
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
import App from "../App";


function Home() {

  const [contactList, setContactList] = useState([]);

  const renderContacts = () => {
    return contactList.map((contact) => (
      <ul
        key={contact.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <li>
          <div
            // className={"name-title"}
            className="mx-auto justify-content-between text-uppercase ml-2 mr-2 "
          >
            {contact.name}
          </div>
        </li>
        <li>
          <div className="mx-auto justify-content-between text-uppercase ml-2 mr-2 ">
            {contact.number}
          </div>
        </li>
      </ul>
    ));
  };

  useEffect(() => {
    axios
      .get("/api/contacts")
      .then((res) => setContactList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main>
        <h1 className="text-secondary text-uppercase text-center my-4 ">
          Contact Book App
        </h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-2">
            <div className="card p-3">
              <div className="text-secondary text-uppercase text-center my-4 ">
                <Link to="/add">
                  <button className=" btn btn-primary ">Add contact</button>
                </Link>
              </div>
              <ul className="list-group list-group-flush border-top-0">
                {renderContacts()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
