import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const isMounted = useRef(false);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const repsonse = await axios.get(url);
      setData(repsonse);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);

    return () => {
      isMounted.current = false;
    };
  }, [url]);

  return { data, isLoading, error };
};
