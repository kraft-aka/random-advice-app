import React, { useState, useEffect } from "react";

const DisplayAdvice = () => {
  const [fetchedData, setFetchedData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const URL = "https://api.adviceslip.com/advice";

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setFetchedData(data.slip);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { advice } = fetchedData;

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const today = `${day}-${month}-${year}`;

  return (
    <main className="container">
      <header className="header">
        <h1>Random Daily Advice for {today}</h1>
      </header>
      <section className="advice">
        <p>{advice}</p>
      </section>
      <button onClick={fetchData} className="btn">
        Get New Random Advice
      </button>
    </main>
  );
};

export default DisplayAdvice;
