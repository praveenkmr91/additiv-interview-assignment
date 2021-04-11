import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";

const NotifAlert = ({ data }) => {
  const typeToVariantMapper = {
    "": "primary",
    success: "success",
    error: "danger",
    info: "info",
  };

  return (
    <>
      {data.map((err, i) => (
        <Alert key={i} variant={typeToVariantMapper[err.type]}>
          {err.text}
        </Alert>
      ))}
    </>
  );
};

NotifAlert.propTypes = {
  data: PropTypes.array.isRequired,
};

NotifAlert.defaultProps = {
  data: [],
};

export default NotifAlert;
