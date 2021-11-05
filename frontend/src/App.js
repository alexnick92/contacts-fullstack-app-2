import "./App.css";
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

import contactData from "./assets/data/contactData";

function App() {
  //const [viewCompleted, setViewCompleted] = useState(false)
  const [contactList, setContactList] = useState([]);
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  useEffect(() => {
    axios
      .get("/api/contacts")
      .then((res) => setContactList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {
    // if(item.id){
    //   axios.put(`/api/contacts/${item.id}/`, item)
    // }

    const contact = {
      name: name,
      phone_number: phoneNo,
    };
    axios.post("/api/contacts/", contact).catch((err) => console.log(err));
    return;
  };

  const renderContacts = () => {
    return contactData.map((item) => (
      <ul
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <li>
          <span
            // className={"name-title"}
            className="mx-auto justify-content-between text-uppercase ml-2 mr-2 "
          >
            {item.name}
          </span>
        </li>
        <li>
          <span className="mx-auto justify-content-between text-uppercase ml-2 mr-2 ">
            {item.number}
          </span>
        </li>
      </ul>
    ));
  };

  function Home() {
    return (
      <>
        <main>
          <h1 className="text-secondary text-uppercase text-center my-4 ">
            Contact Book App
          </h1>
          <div className="row">
            <div className="col-md-6 col-sm-10 mx-auto p-2">
              <div className="card p-3">
                <div className="mb-4">
                  <Link to="/about">
                    <button className=" btn btn-primary">Add contact</button>
                  </Link>
                </div>
                <ul className="list-group list-group-flush border-top-0">
                  {renderContacts()}
                </ul>
              </div>
            </div>
          </div>
          <Add />
        </main>

        <nav>
          <Link to="/about">Add</Link>
        </nav>
      </>
    );
  }

  function Add() {
    return (
      <>
        <main>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Enter Name ..."
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                name="phone_number"
                placeholder="Enter Phone Number"
                onChange={(e) => setPhoneNo(e.target.value)}
                value={phoneNo}
              />
            </label>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }

  return (
    <main className="container-fluid">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<Add />} />
      </Routes>
    </main>
  );
}

export default App;

// import logo from "./logo.svg";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [contactList, setContactList] = useState([]);
//   const [name, setName] = useState("");
//   const [phoneNo, setPhoneNo] = useState("");

//   useEffect(() => {
//     axios
//       .get("/api/contacts/")
//       .then((res) => setContactList(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleSubmit = () => {
//     // if(item.id){
//     //   axios.put(`/api/contacts/${item.id}/`, item)
//     // }

//     const contact = {
//       "name": name,
//       "phone_number": phoneNo,
//     };
//     axios.post("/api/contacts/", contact).catch((err) => console.log(err));
//     return
//   };

//   return (
//     <div className="App">
//       <h1>My Contact List</h1>
//       <ul>
//         {contactList.map((contact) => (
//           <li key={contact.id}>
//             {contact.name} {contact.phone_number}
//           </li>
//         ))}
//       </ul>

//       <form>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter Name ..."
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//           />
//         </label>
//         <label>
//           Phone Number:
//           <input
//             type="text"
//             name="phone_number"
//             placeholder="Enter Phone Number"
//             onChange={(e) => setPhoneNo(e.target.value)}
//             value={phoneNo}
//           />
//         </label>
//           <button type="submit" onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
