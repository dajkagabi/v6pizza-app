import React from 'react';
import {Link}  from "react-router-dom";
import BannerImage from "../assets/homepage.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
            <h1>Fantom Pizzeria</h1>
            <p>In minim occaecat enim est est sint voluptate ad officia laborum.</p>
             <Link to ="/menu">
            <button>ORDER NOW</button>
            </Link>
        </div>
    </div>
  );
}

export default Home;
