import { useState, useEffect } from "react";
import { BriscolaState, BriscPlayerID } from "../constants/game";
import { Ctx } from "boardgame.io";
import { MiddleCardFront } from "./MiddleCardFront";

export type MiddleProps = {
  G: BriscolaState;
  playerID: BriscPlayerID;
  ctx: Ctx;
};

export function Middle({ G, playerID }: MiddleProps) {
  const { middle, previousRound } = G;
  const { winner } = G;

  const [currentTarget, setCurrentTarget] = useState(middle);
  const [isShowingRoundOutcome, setIsShowingRoundOutcome] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (middle.length === 0 && previousRound.length > 0) {
      setCurrentTarget(previousRound);
      setIsShowingRoundOutcome(true);

      timer = setTimeout(() => {
        setCurrentTarget([]);
        setIsShowingRoundOutcome(false);
      }, 2000);
    } else if (middle.length === 1) {
      setCurrentTarget(middle);
    }

    return () => clearTimeout(timer);
  }, [middle]);

  return (
    <div className="w-64 h-48 flex gap-4 items-center">
      {currentTarget.map((card) => (
        <MiddleCardFront
          card={card}
          key={card.alt}
          className={
            isShowingRoundOutcome
              ? winner === playerID
                ? "player-won"
                : "opponent-won"
              : undefined
          }
        />
      ))}
    </div>
  );
}
