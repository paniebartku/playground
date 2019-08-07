import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    // fetch("https://api.github.com/users")
    //   .then(res => res.json())
    //   .then(data => console.log(data));
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${
        process.env.REACT_APP_GH_FINDER_ID
      }&client_secret${process.env.REACT_APP_GH_FINDER_CLIENT_SECRET}`
    );
    // .then(res => console.log(res.data));
    console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className="App">
        <Navbar iconProp="fab fa-github" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
