import React from "react";
import CropImage from "./CropImage";
import Sidebar from "./Sidebar";

import like from "../images/like.png";
import cart from "../images/shopping-cart.png";
import bell from "../images/bell.png";
import downArrow from "../images/down-arrow.png";
const Lookbook = () => {
  return (
    <div className="lookbook">
      <Sidebar />
      <div className="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <form className="search">
              <input
                className="form-control me-2 border border-0"
                type="search"
                placeholder="Search anything"
                aria-label="Search"
              />
            </form>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <img src={like} alt="" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                  <img src={cart} alt="" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                  <img src={bell} alt="" />
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Hi Jason
                    <img src={downArrow} alt="" className="mL"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="card border border-0 bg-light">
          <nav className="navbar navbar-expand-lg navbar-light my-3">
            <div className="container-fluid">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    /
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    CREATE LOOKBOOK
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="card-body bg-white">
            <CropImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
