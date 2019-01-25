import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Content container">
          <div className="row">
            <div className="col s6">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Lorem, ipsum.</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum ipsum libero ab aspernatur eius unde delectus minus
                    ullam doloribus quam porro, dolor placeat, laudantium modi.
                    Ut incidunt minima eaque explicabo?
                  </p>
                </div>
              </div>
            </div>
            <div className="col s6">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Card Title</span>
                  <p>Show stuff with github?</p>
                </div>
              </div>
            </div>
            <div className="col s6">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Card Title</span>
                  <p>Woordweb/technieken die ik ken/kan gebruiken</p>
                </div>
              </div>
            </div>
            <div className="col s6">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Card Title</span>
                  <p>Technieken die ik wil leren?</p>
                </div>
              </div>
            </div>
            <div className="col s6">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Card Title</span>
                  <p>Full width slider met projecten?</p>
                </div>
              </div>
            </div>
            <div className="col s6">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Card Title</span>
                  <p>Contact form</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
