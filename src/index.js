import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reminders from "./reminders";

const reminder = () => {
  return reminders[Math.floor(Math.random() * 9)];
};

ReactDOM.render(
  <BrowserRouter>
    <div>
      <App reminder ={reminder()} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
