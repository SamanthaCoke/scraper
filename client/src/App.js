import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Saved from "./components/Save";
import axios from 'axios'
;
class App extends Component {
  scrapeBooks = () => {
    axios.get("/api/scrape")
    .then(resp => {
      console.log("Bookw scraped", resp)
      window.location.href = "/";
    })
  };
  render() {
    return (
      <div className="container text-center">
        <h1>
          Scraped website:{" "}
          <a href="http://books.toscrape.com">http://books.toscrape.com</a>
        </h1>
        <div class="text-center">
          <button class="btn btn-success" onClick={this.scrapeBooks}>Scrape</button>
        </div>
        <Saved />
      </div>
    );
  }
}

export default App;
