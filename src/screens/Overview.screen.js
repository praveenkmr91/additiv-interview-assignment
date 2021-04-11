import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import useSubOrdinatesGet from "../hooks/useSubOrdinatesGet";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

const OverviewScreen = () => {
  const { name: empName } = useParams();
  const { data, error, loading, setNames } = useSubOrdinatesGet([empName]);
  let finalData = useRef(new Set([]));

  useEffect(() => {
    if (data?.length > 0) {
      data.forEach((item) => finalData.current.add(item));
      setNames(data);
    }
  }, [data]);

  return (
    <div className="pt-5 container d-flex justify-content-center">
      <div className="" style={{ flex: 1 }}>
        <Link to="/">Back</Link>
      </div>

      <Card
        className="w-50 align-items-center justify-content-center d-flex"
        style={{ flex: 10 }}
      >
        <Card.Body className="w-75">
          <Card.Title className="text-center">Employee Overview</Card.Title>
          <Card.Text className="text-center">
            All Subordinates (direct & in-direct) of employee: {empName}
          </Card.Text>
          <br />
          {error && <h1>something wrong man...</h1>}
          {loading && (
            <div className="mx-auto text-center">
              <Spinner animation="border" />
            </div>
          )}
          {finalData.current?.size === 0 && <h2>No results found.</h2>}
          <ListGroup className="mx-auto text-center w-50 ">
            {[...finalData.current].map((item, i) => (
              <ListGroup.Item key={i}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OverviewScreen;
