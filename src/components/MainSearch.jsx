import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StarFill, XCircle } from "react-bootstrap-icons";
import { addResultsAction, removeResultsAction } from "../redux/action";
import { motion } from "motion/react";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const favoriteLength = useSelector((state) => state.favorites.content.length);

  const searchResults = useSelector((state) => state.searchResults.content);

  const isLoading = useSelector((state) => state.searchResults.loading);

  const hasError = useSelector((state) => state.error.errorState);

  const errorMsg = useSelector((state) => state.error.errorMsg);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await fetch(baseEndpoint + query + "&limit=20");
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     dispatch({ type: Add_RESULTS, payload: data });
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    dispatch(addResultsAction(baseEndpoint, query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <motion.h1
            className="display-1 text-white text-center"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            Remote Jobs Search
          </motion.h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <motion.div className="d-flex align-items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Link to="/favorites">
              <div
                style={{ position: "relative" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                className={`border border-2 ${favoriteLength === 0 ? "border-white" : "favorites"} d-flex align-itmes-center rounded-5 py-3 px-4`}
              >
                <StarFill className={`${favoriteLength === 0 ? "text-white" : "text-warning"}`} />
                <span className={`fw-semibold`} style={{ fontSize: "14px", position: "absolute", top: "0", right: "16px" }}>
                  {favoriteLength === 0 ? "" : favoriteLength}
                </span>
              </div>
            </Link>
            <div className="d-flex align-items-center gap-2 flex-fill ">
              <Form className="flex-fill" onSubmit={handleSubmit}>
                <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
              </Form>
              <div
                style={{ cursor: "pointer" }}
                className="d-flex flex-column align-items-center text-danger"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onClick={() => dispatch(removeResultsAction())}
              >
                <XCircle className=" fs-2" />
                <small>Clear All</small>
              </div>
            </div>
            {isLoading && (
              <Spinner animation="border" variant="warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </motion.div>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {hasError && (
            <Alert className="my-4 text-center fs-3 fw-semibold" variant="warning">
              {errorMsg}
            </Alert>
          )}
          {searchResults.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
