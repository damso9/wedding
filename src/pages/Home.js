import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "./Home.css";
import { Gallery } from "../components/Gallery";
import { Info } from "../components/Info";
import { WeddingCountdown } from "../components/Countdown";
import { Toast } from "../components/Toast";




export const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="hero">
        <div className="hero-container">
        <h1>Ikechukwu & Chisomeje</h1>
        <br />
        <br />
        <h3>24 Sept, 2022 | 11:00am</h3>
        </div>
        {/* <button id="rsvp-btn">RSVP</button> */}
      </main>
      <Toast />
      <WeddingCountdown />
      <Info />

    <Gallery />


      <Footer />
    </div>
  );
};
