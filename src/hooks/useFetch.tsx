import React, { useState, useEffect } from "react";
import { Task } from "../models/task-model";

export default function useFetch(url: string, callState?: boolean) {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState<Boolean>(false);
  const [error, serError] = useState<string>("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const rawResponse = await fetch(url);
      const response = await rawResponse.json();
      setLoading(false);

      setData(response);
    } catch (error) {
      setLoading(false);
      serError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [callState, url]);
  return { data, loading, error };
}
