import { useState } from "react";
import styles from "@/styles/consultas/creditos/creditRange.module.css"; // Importing CSS module for styling

export default function CreditDetails() {
  // State to track amount and term
  const [amount, setAmount] = useState(10000); // Default value: 10,000 kz
  const [term, setTerm] = useState(2); // Default term: 2 months

  // Handlers to increase or decrease amount and term
  const handleAmountChange = (e) => setAmount(Number(e.target.value));
  const handleTermChange = (e) => setTerm(Number(e.target.value));

  const increaseAmount = () =>
    setAmount((prev) => Math.min(prev + 1000, 50000));
  const decreaseAmount = () => setAmount((prev) => Math.max(prev - 1000, 0));

  const increaseTerm = () => setTerm((prev) => Math.min(prev + 1, 24));
  const decreaseTerm = () => setTerm((prev) => Math.max(prev - 1, 1));

  return (
    
    <div className={styles.container}>

      <div className={styles.sliderContainer}>
        <div className={styles.label}>Montante</div>
        <div className={styles.controls}>
          <button onClick={decreaseAmount} className={styles.button}>
            -
          </button>
          <input
            type="range"
            min="0"
            max="50000"
            step="1000"
            value={amount}
            onChange={handleAmountChange}
            className={styles.slider}
          />
          <button onClick={increaseAmount} className={styles.button}>
            +
          </button>
        </div>
        <div className={styles.value}>{amount.toLocaleString()} kz</div>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.label}>Prazo</div>
        <div className={styles.controls}>
          <button onClick={decreaseTerm} className={styles.button}>
            -
          </button>
          <input
            type="range"
            min="1"
            max="24"
            step="1"
            value={term}
            onChange={handleTermChange}
            className={styles.slider}
          />
          <button onClick={increaseTerm} className={styles.button}>
            +
          </button>
        </div>
        <div className={styles.value}>{term} meses</div>
      </div>
    </div>
  );
}
