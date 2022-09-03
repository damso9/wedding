import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import "./Countdown.css";

// Random component
const Completionist = () => <div className="countdown-container">It's Wedding Day! </div>;

// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      
        <div className="countdown-container">
         <h1>{days} days : {hours} hours : {minutes} minutes : {seconds} : seconds</h1>

        </div>
      
    );
  }
};

export const WeddingCountdown = () => {

    let weddingDay = new Date(2022, 8, 22 ,11 )
    
  return (
    <>
      <Countdown date={ weddingDay.getTime()} renderer={renderer} />
    </>
  );
};


