import React from "react";

import img8 from "../assets/wedding-photos/8.jpg";
import img9 from "../assets/wedding-photos/9.jpg";
import pin from "../assets/pin.png";

import "./Toast.css";
export const Toast = () => {
  return (
    <div className="toast">
      <aside className="story-container">
        <section className="story">
          <div className="story-photo">
            <div className="img-container">
              <img src={img8} alt="toast" />
            </div>
          </div>
          <div className="story-content">
            <img src={pin} alt="pin image" className="pin-image"/>
            <figure className="content-container">
              <h2 className="for-those">Ikechukwu Udochukwu Adindu</h2>
              {/* <h3>Groom</h3> */}
              <p className="we-met"> My Darling</p>
              <p className="we-met">
                I have pondered on the words which can fully encapsulate and
                deliver my feelings. If I could try, it would be excitement and
                serenity.
              </p>
              <p className="we-met">
                {" "}
                The excitement of what the future holds-all the moments, the
                journeys, the growth, the highs and the lows. I look forward to
                savoring every bit of these.
              </p>
              <p className="we-met">
                And the serenity that I have the best person at my side to go
                through all these together with. There's no person that I would
                want to through life's journey with-other than you.
              </p>
              <p className="we-met">
                I am glad that God sent you to me, in the time that he did-God's
                time is truly the best. I have seen the immense love you give
                and feel honoured to be worthy of it. You are the very best. A
                virtous woman. Proof that, truly, God dey create!
              </p>
              <p className="we-met">
                I look forward to forever, through all the smiles, tears, pain,
                growth, enjoyment, everything. I promise to be by your side
                through it all. It's you and I together, babyy.
              </p>

              <p className="last-toast">I love you, Ifunanyam 💗</p>
            </figure>
            <img src={pin} alt="pin image" className="pin-image right"/>

          </div>
        </section>
        <section className="story reverse">
          <div className="story-photo">
            <div className="img-container">
              <img src={img9} alt="toast" />
            </div>
          </div>
          <div className="story-content">
          <img src={pin} alt="pin image" className="pin-image"/>

            <figure className="content-container">
              <h2 className="for-those">Chisomeje Roseline Nwatu</h2>
              {/* <h3>Bride</h3> */}
              <p className="we-met">
                When I first met you, my focus was kept on you, consistently
                trying to solve the puzzle of who you are.
              </p>
              <p className="we-met">
                But Voila! as our love grew, I couldn't wait to see you again
                and be entertained by the chemistry we shared.
              </p>
              <p className="we-met">
                I like to think of our love as a rainbow that brightens both our
                lives and has a long lasting impression on those who witness it.
              </p>
              <p className="we-met">
                The DAY that seemed far-off has finally arrived and we are doing
                this,
              </p>
              <p className="last-toast">We are getting married</p>
              <p className="we-met">
                I cannot wait to formally bond our love together in matrimony
                and call you My Husband.
              </p>
              <p className="we-met">
                I love you, My Darling. I've loved you for a thousand times
                before and I'll love you for a thousand more.
              </p>
              <p className="last-toast">See you at the altar, My Love 💗</p>
            </figure>
            <img src={pin} alt="pin image" className="pin-image right"/>

          </div>
        </section>
      </aside>
    </div>
  );
};
