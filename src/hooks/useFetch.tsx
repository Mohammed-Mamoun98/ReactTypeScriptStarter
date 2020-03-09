import React, { useState, useEffect } from "react";

export default function useFetch(url: string, callState?: boolean) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoaded] = useState<Boolean>(false);
  const [error, serError] = useState<string>("");

  const fetchData = async () => {
    setLoaded(true);
    try {
      const rawResponse = await fetch(url);
      const response = await rawResponse.json();
      setLoaded(false);

      setData(response);
    } catch (error) {
      serError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [callState, url]);
  return [data, loading, error];
}
