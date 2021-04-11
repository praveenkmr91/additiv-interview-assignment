import React, { useState, useEffect } from "react";
import { fetchEmpData } from "../services/Emp.service";

const useSubOrdinatesGet = (id = []) => {
  const [names, setNames] = useState(id);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const computeDirectSubOrdinates = (empData) => {
    return (empData[1] && empData[1]["direct-subordinates"]) || [];
  };

  const handleError = (error) => {
    console.log("e", error);
    setError(true);
  };

  useEffect(() => {
    if (names?.length > 0) {
      const loadData = async () => {
        setLoading(true);
        setError(false);
        try {
          for (const name of names) {
            const empData = await fetchEmpData(name);
            setData(computeDirectSubOrdinates(empData));
          }
        } catch (error) {
          handleError();
        }
        setLoading(false);
      };

      loadData();
    }
  }, [names]);

  return { data, loading, error, setNames };
};

export default useSubOrdinatesGet;
