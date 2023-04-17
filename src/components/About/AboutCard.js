import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">BOUGHARRAF Abdelhak </span>
            from <span className="purple"> Rabat, MOROCCO.</span>
            <br />I am a senior fullstack developper pursuing EMSI in best IT skill to manage Companies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Swimming 
            </li>
            <li className="about-activity">
              <ImPointRight /> Play ping pong
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a innovation!"{" "}
          </p>
          <footer className="blockquote-footer">BOUGHARRAF</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
