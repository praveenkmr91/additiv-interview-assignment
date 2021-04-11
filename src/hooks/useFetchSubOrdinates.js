import React, { useState, useEffect } from "react";
import { fetchEmpData } from "../services/Emp.service";

const useFetchSubOrdinates = (id = []) => {
  const [names, setNames] = useState(id);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const computeDirectSubOrdinates = (empData) => {
    return (empData[1] && empData[1]["direct-subordinates"]) || [];
  };

  const handleError = (error) => {
    console.log("e", error);
    setNotifications([{ type: "error", text: error.message }]);
  };

  useEffect(() => {
    if (names?.length > 0) {
      const loadData = async () => {
        setLoading(true);
        setNotifications([]);
        try {
          for (const name of names) {
            const empData = await fetchEmpData(name);
            setData(computeDirectSubOrdinates(empData));
          }
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
