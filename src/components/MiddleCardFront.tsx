import styles from "../styles/card.module.css";
import { cardsMap, type Card } from "../constants/cards";

export type CardFrontProps = {
  onClick?: () => void;
  card: Card;
  className?: string;
};

export function MiddleCardFront({ onClick, card, className }: CardFrontProps) {
  const Card = cardsMap[card.key];

  return (
    <div
      onClick={onClick}
      className={
        className
          ? `${styles.cardWrapper} ${styles[className]}`
          : `${styles.cardWrapper}`
      }
    >
      <Card className={styles.card} />
    </div>
  );
}
