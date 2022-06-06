import React from "react";
import "../CSS/Room.css";

const mystyle  = {
  width: "40rem",
  height: "35rem",
}

const cardstyle = {
  width: "40rem",
  height: "35rem",
}


export default function Room() {
  return (
    <section id="main">
      <div className="divContainer1">
        <h2>Explore Our Villa</h2>

        <h1>SPACIOUS ROOMS.</h1>
      </div>

      <div className="container1">
        <div className="card cont1" style={mystyle}>
          <img
            className="card-img-top imgStyle"
            src="https://kimasurf.com/wp-content/uploads/2019/06/Kima_Surf_Header_Rooms_Canggu_Surfcamp_2B_Villa.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h2>Standard Rooms</h2>

            <p className="card-text">
              Standard rooms at Bodhi Farm Villa are stylishly furnished and are
              situated both at the first floor and ground floor. Ground floor
              rooms offer mesmerizing views of the pool and garden while first
              floor rooms offer mind-soothing views of the vast vineyards and
              dense mountains. They have a comfortable queen-size double bed and
              attached bath space that fulfills the basic needs of a vacationer.
              These have been embellished with contemporary furnishing to match
              the taste of both business and leisure travelers. These are
              equipped with hi-tech conveniences like fast-speed WIFI and air
              conditioning service.
            </p>
          </div>
          <div className="flex-row">
            <button
              className="btn btn-outline-success my-2 my-sm-0 "
              type="submit"
            >
              BOOK NOW
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0 "
              type="submit"
            >
              VIEW DETAILS
            </button>
          </div>
        </div>
        <div className="card cont1" style={{width: "40rem", height: "40rem"}}>
          <img
            className="card-img-top imgStyle"
            src="https://cdn.villa-finder.com/cache/fullSize/villas/villa-mia-canggu/villa-mia-canggu-09-villa-mia-9-5e560c7088059.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h2>Executive Rooms</h2>
            <p className="card-text">
              Executive rooms at Bodhi Farm Villa are modishly furnished and are
              situated both at the first floor and ground floor. Ground floor
              rooms offer mesmerizing views of the pool and garden while first
              floor rooms offer mind-soothing views of the vast vineyards and
              dense mountains. They have a comfortable queen-size double bed,
              attached bath space, and a space to lounge around after a tiring
              day. These have been embellished with contemporary furnishing to
              match the taste of both business and leisure travelers. These are
              upgraded with hi-tech conveniences for a premium feel to them.
            </p>
          </div>

          <div className="flex-row">
            <button
              className="btn btn-outline-success my-2 my-sm-0 "
              type="submit"
            >
              BOOK NOW
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0 "
              type="submit"
            >
              VIEW DETAILS
            </button>
          </div>
        </div>
        <div className="card cont1" style={cardstyle}>
          <img
            className="card-img-top imgStyle"
            src="https://www.ministryofvillas.com/wp-content/uploads/2018/07/bali-villaladacha-27.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h2>Luxury Villa</h2>
            <p className="card-text">
              All the rooms open onto the gorgeous sky deck. The seating in the
              lounge is perfect for the entire group to chill together, chatting
              or playing board games. There is a separate living room, a dining
              area. All indoor spaces are air-conditioned.
            </p>
          </div>
          <div className="flex-row">
            <button
              className="btn btn-outline-success my-2 my-sm-0 "
              type="submit"
            >
              BOOK NOW
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0 "
              type="submit"
            >
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
