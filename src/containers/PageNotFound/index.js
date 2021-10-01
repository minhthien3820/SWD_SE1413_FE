import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="bg__error">
        <div id="error-page">
          <div className="content">
            <h2 className="header" data-text="404">
              404
            </h2>
            <h4 data-text="Oops! Page not found">Oops! Page not found</h4>
            <p>
              Sorry, the page you're looking for doesn't exist. 
            </p>
            <div className="btns">
              
              <Link exact to="/">return home</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
