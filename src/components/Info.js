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
              <p>Together Forever! 💒</p>
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
              <a target="_blank" href="https://www.google.com/maps/dir//6.453607,3.509043/@6.453607,3.509043,13z">Click here to go to Church</a>
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
              <a target="_blank" href="https://www.google.com/maps/dir//Pelican+International+Hotel,+Chevy+View+Estate,+Chevron+Drive,+Lekki,+100001,+Lagos/@6.4415609,3.5260107,18.56z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103bf6f6831673f7:0x93f961f4e12717e7!2m2!1d3.526819!2d6.4416286">Click here to go to Reception</a>

            </div>
          </figure>
        </section>

        <iframe
          style={{
            width: "100%",
            height: "350px",
          }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=6.453607,3.509043&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
