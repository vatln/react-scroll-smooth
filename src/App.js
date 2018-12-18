import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Page 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Page 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Page 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Page 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Page 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
