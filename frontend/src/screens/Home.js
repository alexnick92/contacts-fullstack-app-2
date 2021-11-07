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
        className="list-group-item d-flex justify-content-around"
      >
        <li>
          <div
             className={"name-title"}
          
          >
            {contact.name}
          </div>
        </li>
        <li>
          <div 
            className={"name-title"}
          >
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
        <h1 className="App-header">
          Contact Book App
        </h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-2">
            <div className="card">
              <div className="text-secondary text-center m-3">
                <Link to="/add">
                  <button className=" btn btn-primary text-uppercase ">Add contact</button>
                </Link>
              </div>
              <ul className="list-group">
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
