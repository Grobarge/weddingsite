import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <div className="header">
          <ul>
            <li>ceremony</li>
            <li>reception</li>
            <h2>Gaje and Jayden</h2>
            <li>rsvp</li>
            <li>registry</li>
          </ul>
        </div>
        <div className="main-text">
          <h1>Were getting Married!</h1>
          <h2>Tying the knot October 10, 2020</h2>
        </div>
      </div>
      <div className="the-ceremony">
        <div className="ceremony-content">
          <div className="ceremony-picture">
            <img
              src="https://cdn.clipart.email/f539aa6447db138d9ef032f91080f393_face-steal-your-grateful-dead-lot-shirt-archive-clipart-best-_900-900.png"
              alt="gajeandjay"
            />
          </div>
          <h1>The ceremony</h1>
          <h3>4:00 PM</h3>
          <p>
            Thanksgiving Point Golf Course
            <br></br>
            123 W 456 S<br></br>
            Lehi, UT 84043
            <br></br>
            View Map - Insert Link
          </p>
        </div>
      </div>
      <div className="the-reception"></div>
      <div className="rsvp"></div>
      <div className="registry"></div>
    </div>
  );
}

export default App;
