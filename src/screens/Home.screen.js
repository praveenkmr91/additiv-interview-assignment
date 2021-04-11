import React from "react";
import { useHistory } from "react-router-dom";

// app comps
import EmpSearchCard from "../components/EmpSearchCard/EmpSearchCard.component";

const HomeScreen = () => {
  const history = useHistory();

  // handler for emp search
  const handleSearch = React.useCallback((term) => {
    history.push(`/overview/${term}`);
  }, []);

  return (
    <div className="container pt-5 d-flex align-items-stretch justify-content-center align-items-center">
      <EmpSearchCard onSearch={handleSearch} />
    </div>
  );
};

export default HomeScreen;
