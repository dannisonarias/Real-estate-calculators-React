import { motion } from "framer-motion";

const GrossRentMultiplier = (props) => {
  const { propertyValue, grossIncome } = props;
  return (
    <motion.div
      className="gross-rent result-card"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <div className="gross-rent-title">
        <motion.h1 animate={{ fontSize: 50 }} transition={{ duration: 0.35 }}>
          Gross Rent
        </motion.h1>
      </div>
      <div className="gross-rent-content">
        <h4>Gross Rent Multiplier : {propertyValue / (grossIncome * 12)}</h4>
      </div>
    </motion.div>
  );
};

export default GrossRentMultiplier;
