import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl, sourceCodeUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="w-full h-full object-cover" src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          {/* Render Live Demo button only if projectUrl exists */}
          {projectUrl && (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary mt-2 mx-2">Live Demo</button>
            </a>
          )}
          {/* Always render Source Code button if provided */}
          {sourceCodeUrl && (
            <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary mt-2">Source Code</button>
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
