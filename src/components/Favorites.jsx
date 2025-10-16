import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Favorites = () => {
  const allFavorites = useSelector((state) => state.favorites.content);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <div className="d-flex align-items-center justify-content-between">
            <motion.h1
              className="display-1 text-white text-center"
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              Favorites:
            </motion.h1>
            <Link to="/" className="text-decoration-none">
              <Button variant="success">Home</Button>
            </Link>
          </div>
          {allFavorites.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;
