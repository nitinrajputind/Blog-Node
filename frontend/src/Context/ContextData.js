import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextDataProvider = createContext();
const URL = "https://blog-node-project.onrender.com/";

const ContextData = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL);
        // console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log("Data fetchiing is Showing Error: " + err);
      }
    };
    getData();
  }, []);

  return (
    <>
      {data && (
        <ContextDataProvider.Provider value={data}>
          {children}
        </ContextDataProvider.Provider>
      )}
    </>
  );
};

export default ContextData;
