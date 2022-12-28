import styles from "../styles/card.module.css";
import cardRear from "../../images/cardRear.webp";

export function CardBack() {
  return <img src={cardRear} alt="cardRear" className={styles.cardRear} />;
}
