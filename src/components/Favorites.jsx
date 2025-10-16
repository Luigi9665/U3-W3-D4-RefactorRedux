import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";
import { Link } from "react-router-dom";

const Favorites = () => {
  const allFavorites = useSelector((state) => state.favorites.content);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="display-4">Favorites:</h1>
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
