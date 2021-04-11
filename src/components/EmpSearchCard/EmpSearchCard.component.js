import React, { useState } from "react";

// external
import PropTypes from "prop-types";

// bootstrap
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// app component
import Alert from "../Alerts/Alert.component";

// validations
import { checkIfEmpty } from "../../utilities/FormValidations.util";

const EmpSearchCard = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [notifications, setNotifications] = useState([]);

  // handle form submit. can do validations before proceeding
  const onSubmit = (e) => {
    e.preventDefault();
    if (!checkIfEmpty(searchText)) {
      setNotifications([]);
      onSearch(searchText);
    } else {
      setNotifications([{ type: "error", text: "Name field is required" }]);
    }
  };

  return (
    <div className="" style={{ flex: 0.6 }}>
      <Card className="p-3">
        <Card.Title className="text-center">Employee Explorer</Card.Title>
        <Card.Body className="mx-auto text-center w-75">
          <Form onSubmit={onSubmit}>
            <Form.Row className="d-flex align-items-center">
              <Col className="my-1" style={{ flex: 6 }}>
                <Form.Label htmlFor="empName" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  id="empName"
                  placeholder="Employee Name"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </Col>

              <Col className="my-1">
                <Button type="submit">Search</Button>
              </Col>
            </Form.Row>
          </Form>
          <br />
          {notifications && notifications.length > 0 && (
            <Alert data={notifications} />
          )}
        </Card.Body>
        <div>
          Example: Search with <code>'John Hartman'</code>
        </div>
      </Card>
    </div>
  );
};

EmpSearchCard.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

EmpSearchCard.defaultProps = {
  onSearch: () => {},
};

export default React.memo(EmpSearchCard);
