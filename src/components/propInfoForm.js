import { React } from "react";
import { motion } from "framer-motion";

const PropInfoForm = (props) => {
  const {
    setpropertyValue,
    setgrossIncome,
    setvacancyRate,
    setexpenseRate,
    propertyValue,
    expenseRate,
    vacancyRate,
    grossIncome,
    handleResults,
  } = props;

  const propertyValueChange = (e) => {
    setpropertyValue(e.target.value);
  };
  const grossIncomeChange = (e) => {
    setgrossIncome(e.target.value);
  };
  const expenseRateChange = (e) => {
    setexpenseRate(e.target.value);
  };
  const vacancyRateChange = (e) => {
    setvacancyRate(e.target.value);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    handleResults();
  };
  return (
    <motion.div
      className="propInfoForm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="propInfoForm__header">
        <h2>Property Information (monthly data)</h2>
        <form>
          <div>
            <label>Property Value</label>
            <input
              onChange={propertyValueChange}
              type="text"
              placeholder={"$" + propertyValue}
            />
          </div>
          <div>
            <label>Gross income</label>
            <input
              onChange={grossIncomeChange}
              type="text"
              placeholder={"$" + grossIncome}
            />
          </div>
          <div>
            <label>Expense Rate yearly</label>
            <input
              onChange={expenseRateChange}
              type="text"
              placeholder={"%" + expenseRate}
            />
          </div>
          <div>
            <label>Vacancy Rate yearly</label>
            <input
              onChange={vacancyRateChange}
              type="text"
              placeholder={"%" + vacancyRate}
            />
          </div>
          <button className="submit-form" onClick={handleButtonClick}>
            Results
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default PropInfoForm;
