import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CapRateCal = (props) => {
  const { propertyValue, grossIncome, expenseRate, vacancyRate } = props;
  const [capRate, setcapRate] = useState(0.09);
  const calculateCapRate = () => {
    let vacancyPercent;
    let expensePercent;
    if (vacancyRate > 0) vacancyPercent = vacancyRate / 100;
    if (expenseRate > 0) expensePercent = expenseRate / 100;
    let totalReduction = vacancyPercent + expensePercent;
    setcapRate(
      (totalReduction > 0
        ? grossIncome - grossIncome * totalReduction
        : grossIncome / propertyValue) / propertyValue
    );
  };

  useEffect(() => {
    calculateCapRate();
  }, [propertyValue, grossIncome, expenseRate, vacancyRate]);

  return (
    <motion.div
      className="caprate-cal result-card"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="cap-rate-title">
        <motion.h1 transition={{ duration: 0.35 }} animate={{ fontSize: 50 }}>
          {" "}
          Cap Rate{" "}
        </motion.h1>
      </div>
      <div>
        <span> Property Value : {propertyValue}</span>
      </div>
      <div>
        <span> Gross Income : {grossIncome}</span>
      </div>
      <div>
        <span> Vacancy Rate : {vacancyRate}</span>
      </div>
      <div>
        <span> Expense Rate : {expenseRate}</span>
      </div>
      <h4> Cap Rate : %{capRate * 1000}</h4>
    </motion.div>
  );
};

export default CapRateCal;
