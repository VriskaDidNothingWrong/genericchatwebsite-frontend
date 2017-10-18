import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

class LoginPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      register_username: '',
      register_password: '',
      register_password_confirm: '',
      register_email: '',
      login_username: '',
      login_password: ''
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleShowPassword = this.handleShowPassword.bind(this);
    this.submit = this.submit.bind(this);
    this.submit_login = this.submit_login.bind(this);
    this.submit_register = this.submit_register.bind(this);
  }

  handleFormChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleShowPassword(e) {
    this.setState({
      showPassword: e.target.checked
    });
  }

  submit(form) {
    if (form === 'login') {
      this.props.doLogin(
        this.state.login_username,
        this.state.login_password
      );
    } else if (form === 'register') {
      this.props.doRegister(
        this.state.register_username,
        this.state.register_password,
        this.state.register_password_confirm,
        this.state.register_email
      );
    }
  }

  submit_login() {
    this.submit('login');
  }

  submit_register() {
    this.submit('register');
  }

  render() {
    if (this.props.current_user) {
      return <h1>Your already logged in!</h1>
    }

    let passwordFieldType = "password";
    if (this.state.showPassword) {
      passwordFieldType = "text";
    }

    return <div>
      <h1>Register</h1>
      <input id="register_username" type="text" placeholder="Username" onChange={this.handleFormChange}/>
      <input id="register_password" type={passwordFieldType} placeholder="Password" onChange={this.handleFormChange}/>
      <input id="register_password_confirm" type={passwordFieldType} placeholder="Password again" onChange={this.handleFormChange}/>
      <input type="checkbox" id="register_show_password_input" onChange={this.handleShowPassword}/><label htmlFor="register_show_password_input">Show password?</label>
      <input id="register_email" type="email" placeholder="E-mail address (required)" onChange={this.handleFormChange}/>
      <br/>
      <label> r u a robot </label>
      <div className="robo_calculate">
        <div className="input">
          <input type="checkbox" id="bot_yes" name="bot_yes"/>
          <label htmlFor="bot_yes">Yes</label>
        </div>
        <div className="input">
          <input type="checkbox" id="bot_no" name="bot_no"/>
          <label htmlFor="bot_no">No</label>
        </div>
      </div>
      <button onClick={this.submit_register}>Register</button>
      <h1>Log in</h1>
      <input id="login_username" type="text" placeholder="Username" onChange={this.handleFormChange}/>
      <input id="login_password" type="password" placeholder="Password" onChange={this.handleFormChange}/>
      <button onClick={this.submit_login}>Log in</button>
    </div>
  }
};

export default LoginPage;
