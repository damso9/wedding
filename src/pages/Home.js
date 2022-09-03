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
        <h1>Ikechukwu & Chisomeje</h1>
        <p>Are Getting Married</p>
        <h3>24 Sept, 2022 | 11:00am</h3>
        {/* <button id="rsvp-btn">RSVP</button> */}
      </main>
      <WeddingCountdown />
      <Info />
    <Toast />
    <Gallery />


      <Footer />
    </div>
  );
};
