import {useState, useEffect} from 'react';

const useResults = (url) => {
  const [results, setResults] = useState([]);
  const [err, setErr] = useState();

  const getResults = () => {
    fetch(url)
      .then((res) => {
        res
          .json()
          .then((results) => {
            setResults(results.slice(0, 10));
            setErr(null);
          })
          .catch((err) => setErr(err));
      })
      .catch((err) => {
        setErr(err);
      });
  };

  useEffect(() => {
    getResults();
  }, []);

  return [results, err];
};

export default useResults;
