import React from "react";
import "./navigation.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { IoIosAddCircleOutline, IoIosSearch } from "react-icons/io";
import { FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {BiUserCircle} from "react-icons/bi"

const Navigation = () => {
  return (
    <div
      className="fullNav"
      style={{
        backgroundColor: "white",
        borderBottom: ".5px solid rgb(172, 172, 172)",
      }}
    >
      <div className="navBar">
        <div className="logo">
          <Link to="/main" style={{ textDecoration: "none", color: "inherit" }}>
            <h3>
              <FaPaw size={25} /> Petstagram
            </h3>
          </Link>
        </div>
        <form>
          <IoIosSearch />
          <input type="search" className="searchBar" placeholder="Search" />
        </form>
        <div className="navbar-icons">
          <Link to="/main" style={{ color: "inherit" }}>
            <AiOutlineHome size={28} className="icons" />
          </Link>
          <Link to="/post-input" style={{ color: "inherit" }}>
            <IoIosAddCircleOutline size={28} className="icons" />
          </Link>
          <div className="dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="null" id="dropdown-basic">
              <AiOutlineUser size={27} className="profile-icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <Link to="/user-profile" style={{ color: "inherit" }}>
                  <AiOutlineUser size={28} className="icons" /> Profile
                </Link>
              </Dropdown.Item>
              <Link to="/">
              <Dropdown.Item href="#/action-2">Sign Out</Dropdown.Item>
              </Link>
              <Dropdown.Item href="#/action-2">Liked Posts</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Saved Posts</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
