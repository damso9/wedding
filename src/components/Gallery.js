import React from "react";
import "./Gallery.css";
import img1 from "../assets/wedding-photos/1.jpg"
import img2 from "../assets/wedding-photos/2.jpg"
import img3 from "../assets/wedding-photos/3.jpg"
import img4 from "../assets/wedding-photos/4.jpg"
import img5 from "../assets/wedding-photos/5.jpg"
import img6 from "../assets/wedding-photos/6.jpg"
import { Element } from 'react-scroll'


export const Gallery = () => {
  return (
    <>
    <Element id='gallery' name='example-destination'>

      <section>
        <h2>Gallery</h2>
        <main className="gallery-container">
          <div className="img1-container">
            <img id="img1" src={img1} alt="wedding-1" />
          </div>
          <div className="img2-container">
          <img id="img2" src={img2} alt="wedding-2" />

          </div>
          <div className="img3-container">
          <img id="img3" src={img3} alt="wedding-3" />

          </div>

        </main>
        <main className="gallery-container-2">
        <div className="img4-container">
            <img id="img4" src={img4} alt="wedding-4" />
          </div>
            <div className="img5-container">
          <img id="img5" src={img5} alt="wedding-5" />

          </div>
          {/* <div className="img6-container">
          <img id="img6" src={img6} alt="wedding-6" />

          </div>   */}
 

        
        </main>
      </section>
      </Element>

    </>
  );
};
