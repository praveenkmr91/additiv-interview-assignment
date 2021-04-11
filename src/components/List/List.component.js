
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

const List = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <ListGroup>
          <ListGroup.Item></ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
};

List.defaultProps = {
  data: [],
};

export default List;
