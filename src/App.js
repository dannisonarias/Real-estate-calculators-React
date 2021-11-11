import "./App.css";
import CapRateCal from "./components/capRateCal";
import GrossRentMultiplier from "./components/grossRentMultiplier";
import OnePercentCal from "./components/onePercent";
import { useState } from "react";
import PropInfoForm from "./components/propInfoForm";
import { motion } from "framer-motion";
import Header from "./components/header";

function App() {
  const [propertyValue, setpropertyValue] = useState(150000);
  const [grossIncome, setgrossIncome] = useState(1500);
  const [vacancyRate, setvacancyRate] = useState(10);
  const [expenseRate, setexpenseRate] = useState(10);
  const [showResults, setshowResults] = useState(false);
  const handleResults = () => {
    showResults ? setshowResults(false) : setshowResults(true);
  };
  return (
    <div className="App">
      <Header showResults={showResults} />
      {!showResults && (
        <PropInfoForm
          handleResults={handleResults}
          propertyValue={propertyValue}
          setpropertyValue={setpropertyValue}
          grossIncome={grossIncome}
          setgrossIncome={setgrossIncome}
          vacancyRate={vacancyRate}
          setvacancyRate={setvacancyRate}
          expenseRate={expenseRate}
          setexpenseRate={setexpenseRate}
        />
      )}
      <div className="result-container">
        {showResults && (
          <CapRateCal
            propertyValue={propertyValue}
            grossIncome={grossIncome}
            vacancyRate={vacancyRate}
            expenseRate={expenseRate}
          />
        )}
        {showResults && (
          <GrossRentMultiplier
            propertyValue={propertyValue}
            grossIncome={grossIncome}
          />
        )}
        {showResults && (
          <OnePercentCal
            propertyValue={propertyValue}
            grossIncome={grossIncome}
          />
        )}
      </div>
      {showResults && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.35 }}
        >
          <button onClick={handleResults} className="back-button">
            Back
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default App;
