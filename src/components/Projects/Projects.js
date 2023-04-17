import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Dashboard from "../../Assets/Projects/Dashboard.JPG";
import ESHOP from "../../Assets/Projects/ESHOP.JPG";
import AllJobs from "../../Assets/Projects/AllJobs.JPG";
import SlothStore from "../../Assets/Projects/SlothStore.JPG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AllJobs}
              isBlog={false}
              title="Job-Planning"
              description="Personal Job Planning or Workspace to store the offers and have history of your interviews, waiting posts with react.js. Have features which allows user profile, login/register as well as authentification."
              ghLink="https://github.com/bougha1/Job-Planning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SlothStore}
              isBlog={false}
              title="Sloth Store"
              description="My personal ecommerce web page build with Next.js and Tailwind Css which takes the content from makdown images and renders it using Next.js. Supports filters and easy to add ti cart."
              ghLink="https://github.com/bougha1/Sloth-Store"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ESHOP}
              isBlog={false}
              title="Eshop"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/bougha1/Eshop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
              isBlog={false}
              title="Shops Dashboard"
              description="Used the shop and have a dashboard of users and items shoped with chart who define the augmentation or demunition of shop with time."
              ghLink="https://github.com/bougha1/Shops-Dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
