import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { extractBankHolidays } from "../utils/utils";

export default useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const isSubscribed = useRef(false);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      setData(extractBankHolidays(data));
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);

    return () => {
      isSubscribed.current = false;
    };
  }, [url]);

  return { data, isLoading, error };
};
