import React, { useEffect } from "react";
import "./App.css";

function App() {
  const promiseExample = () => {
    const friend = new Promise((resolve, reject) => {
      let isChocolateEveryDay = true; // Set to true for this example
      if (isChocolateEveryDay) {
        resolve("Promise Resolved");
      } else {
        reject("Promise Rejected");
      }
    });
    friend
      .then((resolve) => {
        console.log(`${resolve} `);
      })
      .catch((error) => {
        console.log(`${reject}`);
      });
  };

  useEffect(() => {
    promiseExample();
  }, []);

  return <div className="App"></div>;
}

export default App;
