import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your data source (e.g., API or database)
    const fetchData = async () => {
      try {
        // Your data fetching logic here
        const response = await fetch("/api/data");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useData;
