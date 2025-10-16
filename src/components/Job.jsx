import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Job = ({ data }) => {
  const [favorite, setFavorite] = useState(false);

  const dispatch = useDispatch();

  const allFavorites = useSelector((state) => state.favorites.content);

  const ifInFavorites = () => {
    allFavorites.forEach((job) => {
      if (data._id === job._id) {
        setFavorite(true);
      }
    });
  };

  const starClick = () => {
    if (favorite) {
      dispatch({ type: "REMOVE_FROM_FAVORITES", payload: data });
      setFavorite(false);
    } else {
      dispatch({ type: "ADD_TO_FAVORITES", payload: data });
    }
  };

  useEffect(() => {
    ifInFavorites();
  }, [allFavorites]);

  return (
    <Row className="align-items-center mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={1}>
        <button className={`btn border ${favorite ? "border-warning text-warning" : "border-dark "}`} onClick={starClick}>
          <StarFill />
        </button>
      </Col>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
