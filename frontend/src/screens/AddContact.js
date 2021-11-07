import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import App from "../App.css";
import { message, Button } from "antd";

function AddContact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: name,
      number: number,
    };

    if (name === "") {
      message.error("Please add a name");
    } else if (number === "") {
      message.error("Please add a number");
    } else {
      axios.post("/api/contacts/", contact).catch((err) => message.error(err));
      message.success("A New Contact Has Been Created");
      navigate("/");
    }
  };

  return (
    <>
      <div>
        <h1 className="App-header">Add A Contact</h1>

        <form>
          <div className="row">
            <div className="col-md-6 col-sm-10 mx-auto p-2">
              <div className="card p-2">
                <div className="text-secondary text-uppercase text-center my-4 ">
                  <label>
                    Name:
                    <input
                      style={{ marginLeft: 20 }}
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Enter Name ..."
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-10 mx-auto p-2">
              <div className="card p-2">
                <div className="text-secondary text-uppercase text-center my-4 ">
                  <label>
                    Phone Number:
                    <input
                      style={{ marginLeft: 20 }}
                      type="text"
                      name="number"
                      value={number}
                      placeholder="Enter Phone Number ..."
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-md-2 col-sm-10 mx-auto p-3 ">
            <div className=" p-3 ">
              <input
              className=" btn btn-primary text-center"
                type="submit"
                value="Submit"
                onClick={handleSubmit}
              />
            </div>
            <div className=" p-3 ">
              <Link to="/">
                <button className=" btn btn-secondary text-center" >Back</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddContact;
