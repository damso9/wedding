import React from 'react'
import { FaBars, FaChurch, FaGlassCheers, } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import "./Info.css"
export const Info = () => {
  return (
    <>
    <div className="info-container">
    <h2>Ceremony & Celebration</h2>
        <section className="event-group">
            <figure>
                <div className="figure-container">
                < GiPartyPopper className='event-icon'/>
                <h3>Our Wedding day</h3>
                <p>24th Sept 2022</p>
                <p>It's the same day we first met 9 years ago</p>

                </div>
            </figure>
            <figure>
            <div className="figure-container">
                <FaChurch className='event-icon'/>
                <h3>Ceremony</h3>
                <p>11:00 AM</p>
                <p>ASSEMBLIES OF GOD CHURCH, Pinnock Estate, By Jakande Roundabout, Off Lekki-Epe Expressway, Lagos.</p>

                </div>
            </figure>
            <figure>
            <div className="figure-container">
                <FaGlassCheers className='event-icon'/>
                <h3>Reception</h3>
                <p>Follows immediately</p>
                <p>Novatel Hotel, Plateau Hall (6th Floor), Chevy View Estate, By Chevron Roundabout, Off Lekki-Epe Expressway, Lagos.</p>

                </div>
            </figure>
        </section>
    </div>
       
    </>
  )
}
