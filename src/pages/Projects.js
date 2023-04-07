import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import datamining from "../images/datamining.png"
import react1 from "../images/react1.jpeg";
import library from "../images/library.png";
import ruby from "../images/ruby.png";
import railsreact from "../images/railsreact.png";
import python from "../images/python1.jpg";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Full Stack Web Developer",
      imageUrl: railsreact,
    },
    {
      id: 2,
      name: "React developer",
      imageUrl: react1,
    },
    {
      id: 3,
      name: "Ruby Developer",
      imageUrl: ruby,
    },
    {
      id: 4,
      name: "Data Analyst",
      imageUrl: datamining,
    },
    {
      id: 5,
      name: "python Developer",
      imageUrl: python,
    },
    {
      id: 6,
      name: "Library Management",
      imageUrl: library,
    },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
