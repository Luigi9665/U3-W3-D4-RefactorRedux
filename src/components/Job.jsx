import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToFavoriteAction, removeFromFavoriteAction } from "../redux/action";
import { motion } from "motion/react";

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
      dispatch(removeFromFavoriteAction(data));
      setFavorite(false);
    } else {
      dispatch(addToFavoriteAction(data));
    }
  };

  useEffect(() => {
    ifInFavorites();
  }, [allFavorites]);

  return (
    <motion.div initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ delay: 0.4, type: "spring", stiffness: 120 }}>
      <Row className="align-items-center mx-0 mt-3 p-3" style={{ border: "1px solid #9e9e9eff", borderRadius: 4 }}>
        <Col xs={1}>
          <button className={`btn border ${favorite ? "border-warning text-warning" : "border-white text-white"}`} onClick={starClick}>
            <StarFill />
          </button>
        </Col>
        <Col xs={3}>
          <Link className="text-decoration-none text-white" to={`/${data.company_name}`}>
            {data.company_name}
          </Link>
        </Col>
        <Col xs={8}>
          <a className="text-decoration-none text-white" href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Job;
