import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import useFetchSubOrdinates from "../hooks/useFetchSubOrdinates";
//bootstrap
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
// app component
import Alert from "../components/Alerts/Alert.component";

const OverviewScreen = () => {
  const { name: empName } = useParams();
  const { data, notifications, loading, setNames } = useFetchSubOrdinates([
    empName,
  ]);
  let finalData = useRef(new Set([])); //  to prevent duplicates

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
          {/* Error */}
          {notifications?.length > 0 && <Alert data={notifications} />}
          {/* Loading */}
          {loading && (
            <div className="mx-auto text-center">
              <Spinner animation="border" />
            </div>
          )}
          <h4>{finalData?.current.size} records found</h4>
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
