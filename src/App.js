import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import News from "./Components/News";
import "./loader.css"; // Import the loader styles
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 15;

  state = {
    progress: 0,
  };

  // Ensure the setProgress method is correctly bound
  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            {/* Pass setProgress correctly to News component */}
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress} // Correctly passing the function
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setProgress={this.setProgress} // Correctly passing the function
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="/buisness"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
                  country="us"
                  category="technology"
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
