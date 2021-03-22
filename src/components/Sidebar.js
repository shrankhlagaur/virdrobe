import React from "react";

import logo from "../images/logo@3x.jpg";

const Sidebar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="sidebar">
          <div className="conatiner">
            <div class="container my-4">
              <div className="row">
                <div className="col-3">
                  <img src={logo} alt="logo" width="50" height="50" />
                </div>
                <div className="col-3 mt-3 mx-2">
                  <h3 className="text-maroon">Virdrobe</h3>
                </div>
              </div>
            </div>
            <a className="active" href="#home">
              Home
            </a>
            <a href="#wardrobe">My Wardrobe</a>
            <a href="#orders">Orders</a>
            <a href="#friend">My Friend</a>
            <a href="#bakground">My Background</a>
            <a href="#chats">Chats</a>
            <a href="#gifts">Gifts</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
