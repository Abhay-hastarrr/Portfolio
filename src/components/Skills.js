import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiSpringboot } from 'react-icons/si';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="text-4xl font-bold mb-4">Skills</h2>
              <p className="text-gray-600 mb-8 text-center">
                Here are some of the technologies I work with regularly.
              </p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all 0.5s"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div
                    className="item text-center"
                    key={index}
                  >
                    <div
                      className="logo mb-3 inline-flex items-center justify-center cursor-pointer"
                      style={{ fontSize: '5rem' }}
                    >
                      <span
                        className="transition-all duration-300 transform hover:scale-110 hover:shadow-md cursor-pointer"
                        style={{
                          display: 'inline-block',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        {skill.icon}
                      </span>
                    </div>
                    <h5 className="text-xl font-medium mt-2 cursor-pointer hover:scale-110 transition-all duration-300 transform">
                      {skill.name}
                    </h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};