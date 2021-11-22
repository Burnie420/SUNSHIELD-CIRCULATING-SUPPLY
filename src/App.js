import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [totalCirc, setTotalCirc] = useState("");
  const [fast, setFast] = useState(0);

  const autoCallCMC = () => {
    fetch("https://immense-peak-73592.herokuapp.com/results")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data = JSON.stringify(data);
        data = JSON.parse(data);
        data.forEach((article) => {
          setTotalCirc(article.totalCirc);
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      setFast((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    autoCallCMC();
  }, [fast]);
  return (
    <div className="App">
      <h1>{totalCirc}</h1>
    </div>
  );
}

export default App;
