import { motion } from "framer-motion";

const OnePercentCal = ({ propertyValue, grossIncome }) => {
  let onePercent = grossIncome / propertyValue;
  return (
    <motion.div
      className="onePercentCal result-card"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="onePercentCal__title">
        <motion.h1 animate={{ fontSize: 50 }} transition={{ duration: 0.35 }}>
          One Percent
        </motion.h1>
      </div>
      <h3>ONE PERCENT RULE : {onePercent >= 0.01 ? "PASSED" : "FAILED"}</h3>
      <h4> Percent: %{onePercent * 100} </h4>
    </motion.div>
  );
};

export default OnePercentCal;
