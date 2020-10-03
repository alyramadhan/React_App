import React from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import { config } from "../../config.js";

const DetailUser = (props) => {
  let { id } = useParams();
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    getUser();
  }, [id]);

  const getUser = async () => {
    try {
      console.log(id);
      let response = await Axios.get(`${config.api_host}/users/${id}`);
      setUser(response.data.data);
    } catch {
      props.history.push("/UserNotFound");
      // console.log("error");
    }
  };

  const nextHandle = () => {
    let nextId = parseInt(id, 10) + 1;
    props.history.push(`/Detailuser/${nextId}`);
    // console.log(nextId);
  };

  const prevHandle = () => {
    let prevId = parseInt(id, 10) - 1;
    props.history.push(`/Detailuser/${prevId}`);
    // console.log(prevId);
  };
  return (
    <React.Fragment>
      <Link to="/">
        <button className="btn btn-secondary float-right mt-3 mr-3">
          Back
        </button>
      </Link>
      <div className="container mt-5">
        <img className="rounded-circle" src={user.avatar} alt="" />
        <h3 className="mt-2">
          {user.first_name} {user.last_name}
        </h3>
        <p>{user.email}</p>
        <div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              disabled={id < 2}
              onClick={prevHandle}
              className="btn btn-primary"
            >
              Previous
            </button>
            <button onClick={nextHandle} className="btn btn-warning">
              Next
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailUser;
