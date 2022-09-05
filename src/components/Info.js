import React from "react";
import { FaBars, FaChurch, FaGlassCheers } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import "./Info.css";
export const Info = () => {
  return (
    <>
      <div className="info-container">
        <h2>Ceremony & Celebration</h2>

        <section className="event-group">
          <figure>
            <div className="figure-container">
              <GiPartyPopper className="event-icon" />
              <h3>Our Wedding day</h3>
              <p>24th Sept 2022</p>
              <p>Too Forever! 💒</p>
            </div>
          </figure>
          <figure>
            <div className="figure-container">
              <FaChurch className="event-icon" />
              <h3>Ceremony</h3>
              <p>11:00 AM</p>
              <p>
                ASSEMBLIES OF GOD CHURCH, Pinnock Estate, By Jakande Roundabout,
                Off Lekki-Epe Expressway, Lagos.
              </p>
            </div>
          </figure>
          <figure>
            <div className="figure-container">
              <FaGlassCheers className="event-icon" />
              <h3>Reception</h3>
              <p>Follows immediately</p>
              <p>
                Novatel Hotel, Plateau Hall (6th Floor), Chevy View Estate, By
                Chevron Roundabout, Off Lekki-Epe Expressway, Lagos.
              </p>
            </div>
          </figure>
        </section>

            <iframe
style={{
    width: "100%",
    height:"350px",
}}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=ASSEMBLIES%20OF%20GOD%20CHURCH,%20Pinnock%20Estate&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>

            <br />


      </div>
    </>
  );
};
