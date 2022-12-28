import { Ctx } from "boardgame.io";
import { CardFront } from "./CardFront";
import { BriscolaMoves, BriscolaState, BriscPlayerID } from "../constants/game";

export type PlayerProps = {
  G: BriscolaState;
  playerID: BriscPlayerID;
  ctx: Ctx;
  moves: BriscolaMoves;
};
export function Player({ G, playerID, ctx, moves }: PlayerProps) {
  const { currentPlayer } = ctx;
  const playerKey = playerID === "0" ? "player_0" : "player_1";
  const cardsToRender = G[playerKey].cards;

  return (
    <>
      {cardsToRender.map((card, index) => (
        <CardFront
          key={card.alt}
          onClick={() => {
            moves.playCard({ cardIndex: index });
          }}
          isInteractable={currentPlayer === playerID}
          card={card}
          disabled={currentPlayer !== playerID}
        />
      ))}
    </>
  );
}
