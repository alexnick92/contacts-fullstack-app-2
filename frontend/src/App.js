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


import Home from "./screens/Home";
import AddContact from "./screens/AddContact";
// import contactData from "./assets/data/contactData";

function App() {

  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
      </Routes>
    </main>
  );
}

export default App;
