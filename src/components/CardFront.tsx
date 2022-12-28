import styles from "../styles/card.module.css";
import { Card, cardsMap } from "../constants/cards";

export type CardFrontProps = {
  onClick?: () => void;
  card: Card;
  isInteractable: boolean;
  disabled: boolean;
};

export function CardFront({
  onClick,
  card,
  isInteractable,
  disabled,
}: CardFrontProps) {
  const Card = cardsMap[card.key];

  const classes = [
    styles.cardWrapper,
    ...(isInteractable ? [styles.interactable] : []),
    ...(disabled ? [styles.disabled] : []),
  ];

  return (
    <div
      onClick={onClick}
      className={classes.length > 0 ? classes.join(" ") : undefined}
    >
      <Card className={styles.card} />
    </div>
  );
}
