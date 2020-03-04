import React, { useState, useEffect } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [loaded, setLoaded] = useState<Boolean>(false);
  const [error, serError] = useState<string>("");

  const fetchData = async () => {
    try {
      const rawResponse = await fetch(url);
      const response = await rawResponse.json();
      setData(response);
      setLoaded(true);
    } catch (error) {
      serError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return [data, loaded, error];
}
