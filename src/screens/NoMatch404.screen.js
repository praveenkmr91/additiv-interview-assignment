import { useLocation } from "react-router-dom";

const NoMatch404 = () => {
  let location = useLocation();

  return (
    <div className="container">
      <h3>No match for route - {location.pathname}</h3>
    </div>
  );
};

export default NoMatch404;
