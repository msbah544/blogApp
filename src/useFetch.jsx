import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCtrl.signal })
        .then((response) => {
          //console.log(response);
          if (!response.ok) {
            //console.log(response + "working");
            throw Error("Resource not found!");
          }
          return response.json();
        })
        .then((results) => {
          //console.log(data);
          setData(results);
          setIsPending(false);
          setError(false);
        })
        .catch((error) => {
          //console.log(error.message);
          if (error.name === "AbortError") {
            console.log("abort error handled");
          } else {
            setError(error.message);
            setIsPending(false);
            setData(false);
          }
        });
    }, 1000);
    return () => abortCtrl.abort();
  }, [url]);
  return { data, isPending, error, setData };
};

export default useFetch;
