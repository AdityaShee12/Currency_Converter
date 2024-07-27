import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 bg-violet-500 flex flex-col justify-center items-center text-center">
        <div className="p-5">
          <img
            src="Images/vector-logo-currency-exchange-PM8WH9.jpg"
            alt="Currency Exchange"
            className="h-32 w-32"
          />
        </div>
        <div className="text-white text-5xl">
          <div>Currency Calculator</div>
          <p className="italic text-sm">Calculate rates of all currencies</p>
        </div>
        <Link to="/converter">
          <button className="border-2 rounded-xl w-60 h-12 mt-10 bg-white text-black">
            Convert
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
