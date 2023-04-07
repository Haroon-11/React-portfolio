import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

import react1 from "../images/react1.jpeg";
import datamining from "../images/datamining.png";
import railsreact from "../images/railsreact.png";

const Services = () => {
  const serviceList = [
    {
      id: 1,
      name: "Front End Development",
      imageUrl: react1,
    },
    {
      id: 2,
      name: "Full Stack Web Development",
      imageUrl: railsreact,
    },
    {
      id: 3,
      name: "Data Analysis",
      imageUrl: datamining,
    },
  ];

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <div className="services">
        <h2>Services</h2>
        <div className="wrapper">
          {serviceList.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
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
      </div>
    </motion.div>
  );
};

export default Services;
