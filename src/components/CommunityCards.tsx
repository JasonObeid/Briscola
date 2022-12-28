import { BriscolaState } from "../constants/game";
import styles from "../styles/card.module.css";
export type CommunityCardsProps = {
  G: BriscolaState;
};

import deck from "../../images/deck.webp";
import { cardsMap } from "../constants/cards";

export function CommunityCards({ G }: CommunityCardsProps) {
  const { briscola } = G;
  const remainingCards = G.deckOnBoard.length;

  if (remainingCards === 0) {
    return null;
  }

  const Briscola = cardsMap[briscola.key];

  return (
    <>
      <div className={`${styles.cardWrapper} ${styles.briscolaWrapper}`}>
        <Briscola className={`${styles.card} ${styles.briscola}`} />
      </div>
      <img
        src={remainingCards > 0 ? deck : ""}
        alt="backside"
        className={styles.deck}
      />
    </>
  );
}
