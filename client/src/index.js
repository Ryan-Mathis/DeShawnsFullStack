import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import { Dog } from "./DogStuff/Dog.js";
import { AddDog } from "./DogStuff/AddDog.js";
import { Walkers } from "./WalkerStuff/Walkers.js";
import { AssignDogForm } from "./WalkerStuff/AssignDogForm.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/dogs/:id" element={<Dog />} />
        <Route path="/addadog" element={<AddDog />} />
        <Route path="/walkers" element={<Walkers />} />
        <Route path="/assignnewdog/:walkerId" element={<AssignDogForm />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
