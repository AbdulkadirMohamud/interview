import React, { useEffect } from "react";
import "./App.css";

function App() {
  const promiseOne = (paramOne) => {
    return new Promise((resolve, reject) => {
      // For demonstration, let's assume it always resolves
      resolve(paramOne + " is a good man");
    });
  };

  const promiseTwo = (paramTwo) => {
    return new Promise((resolve, reject) => {
      if (paramTwo === "promise Resolved") {
        resolve("Abdulkadir is still a good man");
      } else {
        reject("promise Rejected");
      }
    });
  };

  const asyncMain = async () => {
    try {
      let res = await promiseOne("Abdulkadir");
      console.log(res);
      let resTwo = await promiseTwo("promise Resolved");
      console.log(resTwo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    asyncMain();
  }, []);

  return <div className="App"></div>;
}

export default App;
