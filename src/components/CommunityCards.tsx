import { BriscolaState } from "../constants/game";
import styles from "../styles/card.module.css";
export type CommunityCardsProps = {
  G: BriscolaState;
};

import deck from "../../images/deck.webp";
import cardRear from "../../images/cardRear.webp";
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
      <div className="flex justify-center items-center">
        <div className={`${styles.cardWrapper} ${styles.briscolaWrapper}`}>
          <Briscola className={`${styles.card} ${styles.briscola}`} />
        </div>
        <img
          src={remainingCards > 1 ? deck : cardRear}
          alt="backside"
          className={styles.deck}
        />
      </div>
      <p className="max-sm:hidden ml-auto mr-4">{`${remainingCards} card${
        remainingCards > 1 ? "s" : ""
      } remaining`}</p>
      <p className="sm:hidden ml-auto">{`${remainingCards}`}</p>
    </>
  );
}
