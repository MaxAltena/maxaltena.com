import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Content ">
          <div className="container">
            <div className="row">
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Lorem, ipsum.</span>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Harum ipsum libero ab aspernatur eius unde delectus minus
                      ullam doloribus quam porro, dolor placeat, laudantium
                      modi. Ut incidunt minima eaque explicabo?
                    </p>
                  </div>
                  <div className="card-action">
                    <Link to="/" className="btn waves-effect waves-light blue">
                      Home
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>About me</p>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/about"
                      className="btn waves-effect waves-light blue"
                    >
                      About
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>Show stuff with github?</p>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/projects"
                      className="btn waves-effect waves-light blue"
                    >
                      Projects
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>Woordweb/technieken die ik ken/kan gebruiken</p>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/skills"
                      className="btn waves-effect waves-light blue"
                    >
                      Skills
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Lorem, ipsum.</span>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Harum ipsum libero ab aspernatur eius unde delectus minus
                      ullam doloribus quam porro, dolor placeat, laudantium
                      modi. Ut incidunt minima eaque explicabo?
                    </p>
                  </div>
                  <div className="card-action">
                    <Link to="/" className="btn waves-effect waves-light blue">
                      Home
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>Technieken die ik wil leren?</p>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/skills"
                      className="btn waves-effect waves-light blue"
                    >
                      Skills
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>Full width slider met projecten?</p>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/projects"
                      className="btn waves-effect waves-light blue"
                    >
                      Projects
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p>Contact form</p>
                  </div>
                  <div className="card-action">
                    <Link
                      to="/contact"
                      className="btn waves-effect waves-light blue"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col s12 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Lorem, ipsum.</span>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Harum ipsum libero ab aspernatur eius unde delectus minus
                      ullam doloribus quam porro, dolor placeat, laudantium
                      modi. Ut incidunt minima eaque explicabo?
                    </p>
                  </div>
                  <div className="card-action">
                    <Link to="/" className="btn waves-effect waves-light blue">
                      Home
                    </Link>
                  </div>
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
