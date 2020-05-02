import React, { Component } from "react";
import loginImg from "./Logo.png";
import "./style.scss";

export class Login extends Component {
  render() {
    return (
      <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">nom d'utilisateur</label>
              <input
                type="text"
                name="username"
                placeholder="nom  d'utilisateur"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">mot de passe </label>
              <input
                type="password"
                name="password"
                placeholder="mot de passe"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
