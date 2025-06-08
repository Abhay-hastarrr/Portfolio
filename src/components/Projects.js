import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Agrinext from "../assets/img/project-img1(1).png";
import Weatherfm from "../assets/img/project-img2.png";
import BingeBuddy from "../assets/img/BingeBuddy.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import RescueRoot from "../assets/img/RescueRoot.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Agrinext",
      description: "Developed a multilingual agriculture-focused e-commerce platform using the MERN stack, featuring real-time inventory management and a clean, user-friendly UI with an intuitive admin panel for efficient product and order management.",
      imgUrl: Agrinext,
      projectUrl: "https://agrinext-frontend.vercel.app",
      sourceCodeUrl: "https://github.com/Abhay-hastarrr/AgriNext",
      category: "live"
    },
    {
      title: "Weather.fm",
      description: "Developed a weather-based music recommendation web app with integrated Spotify links. Designed a clean, responsive UI for seamless user interaction.",
      imgUrl: Weatherfm,
      projectUrl: "https://wheather-fm.vercel.app/",
      sourceCodeUrl: "https://github.com/Abhay-hastarrr/wheather.fm",
      category: "live"
    },
    {
      title: "BingeBuddy",
      description: "BingeBuddy is a full-stack movie recommendation web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It helps users discover trending, top-rated, and upcoming movies with a sleek, modern user interface. The app also includes authentication and real-time dynamic data fetching from external movie APIs.",
      imgUrl: BingeBuddy,
      sourceCodeUrl:"https://github.com/Abhay-hastarrr/BingeBuddy",
      category: "github"
    },
    {
      title: "RescueRoot",
      description: "Developed a real-time emergency shelter locator with live bed availability and multilingual support. Included an admin panel for efficient shelter and resource management.",
      imgUrl: RescueRoot,
      sourceCodeUrl:"https://github.com/Abhay-hastarrr/RescueRoot",
      category: "github"
    }
  ];

  const liveProjects = projects.filter(p => p.category === "live");
  const githubProjects = projects.filter(p => p.category === "github");

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of the projects I've built using modern web technologies. Each one reflects my passion for solving real-world problems through clean design and smart code.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="custom-nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item className="flex-fill text-center">
                        <Nav.Link eventKey="first" className="custom-pill">Live Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="flex-fill text-center">
                        <Nav.Link eventKey="second" className="custom-pill">GitHub Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {liveProjects.map((project, index) => (
                            <ProjectCard key={`live-${index}`} {...project} className="transition-transform duration-300 hover:scale-110"
 />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {githubProjects.map((project, index) => (
                            <ProjectCard key={`github-${index}`} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};