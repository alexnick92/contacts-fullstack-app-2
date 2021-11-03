import "./App.css";
import React, { useState } from "react";

const contactData = [
  {
    id: 1,
    name: "Alexander Nicholas",
    number: "60182595970",
  },
  {
    id: 2,
    name: "Andy Andy LLS",
    number: "60163228959",
  },
  {
    id: 3,
    name: "Pamela Lee",
    number: "60163988543",
  },
  {
    id: 4,
    name: "Aaron Nicholas",
    number: "60111111111",
  },
];

function App() {
  //const [viewCompleted, setViewCompleted] = useState(false)
  const [contactList, setContactList] = useState({ contactData });

  // const renderContactList = () => {
  //   return (
  //     <div className="nav nav-tabs">
  //       <span>
  //         className={}
  //       </span>
  //     </div>
  //   )
  // }

  const renderContacts = () => {
    return contactData.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={"contacts-title mr-2"}
          //title={item.name}
        >
          {item.name}
          <span className={"contacts-title mr-2"}>{item.number}</span>
        </span>
        <span>
          {/* <button className="btn btn-secondary mr-2">Edit</button>
          <button className="btn btn-danger">Delete</button> */}
        </span>
      </li>
    ));
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <main className="container">
      <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button className="btn btn-primary">Add contact</button>
            </div>
            <ul className="list-group list-group-flush border-top-0">
              {renderContacts()}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
