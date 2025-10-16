import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StarFill } from "react-bootstrap-icons";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  const dispatch = useDispatch();

  const favoriteLength = useSelector((state) => state.favorites.content.length);

  const searchResults = useSelector((state) => state.searchResults.content);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        // setJobs(data);
        dispatch({ type: "Add_RESULTS", payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <div className="d-flex align-items-center gap-3">
            <Form className="flex-fill" onSubmit={handleSubmit}>
              <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
            </Form>
            <Link to="/favorites">
              <div style={{ position: "relative" }} className="border border-2 border-info d-flex align-itmes-center rounded-5 py-3 px-4">
                <StarFill />
                <span className="fw-semibold" style={{ fontSize: "14px", position: "absolute", top: "0", right: "16px" }}>
                  {favoriteLength === 0 ? "" : favoriteLength}
                </span>
              </div>
            </Link>
          </div>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {searchResults.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
