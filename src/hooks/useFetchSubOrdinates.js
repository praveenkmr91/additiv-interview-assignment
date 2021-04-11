import React, { useState, useEffect, useRef } from "react";
import { fetchEmpData } from "../services/Emp.service";

const useFetchSubOrdinates = (id = []) => {
  const [names, setNames] = useState(id);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // store already fetched emps to prevent fetching again
  let fetchedEmps = useRef([]);

  const computeDirectSubOrdinates = (empData) => {
    return (empData && empData[1] && empData[1]["direct-subordinates"]) || [];
  };

  const handleError = (error) => {
    setNotifications([{ type: "error", text: error.message }]);
  };

  useEffect(() => {
    if (names?.length > 0) {
      const loadData = async () => {
        setLoading(true);
        setNotifications([]);
        try {
          const promises = names.map((name) =>
            !fetchedEmps.current.includes(name)
              ? fetchEmpData(name)
              : Promise.reject()
          );
          const responses = await Promise.all(promises);

          responses.forEach((resp) => {
            setData(computeDirectSubOrdinates(resp));
            fetchedEmps.current.push(resp);
          });
        } catch (err) {
          handleError(err);
        }
        setLoading(false);
      };
      loadData();
    }
  }, [names]);

  return { data, loading, notifications, setNames };
};

export default useFetchSubOrdinates;
