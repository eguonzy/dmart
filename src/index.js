import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./res/css modules/index.scss";
import "hamburgers/_sass/hamburgers/hamburgers.scss";
import App from "./App";
import TM from "react-gtm-module";
import reportWebVitals from "./reportWebVitals";
import ScrollTop from "./controller/ScrollTop";
const tagManagerArgs = {
  gtmId: "GTM-W4J55DN",
};

TM.initialize(tagManagerArgs);

function sendToAnalytics({ id, name, value }) {
  TM.dataLayer("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: name,
    eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ScrollTop>
        <App />
      </ScrollTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in ynpmnpm install --save react-router-domour app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(sendToAnalytics);
