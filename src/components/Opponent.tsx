import { CardBack } from "./CardBack";
import { BriscolaState, BriscPlayerID } from "../constants/game";

export type OpponentProps = {
  playerID: BriscPlayerID;
  G: BriscolaState;
};

export function Opponent({ playerID: playerPlayerID, G }: OpponentProps) {
  const playerID = playerPlayerID === "0" ? "player_1" : "player_0";
  const player = G[playerID];

  const cardsToRender = player.cards;

  return (
    <>
      {cardsToRender.map((card) => (
        <CardBack key={card.alt} />
      ))}
    </>
  );
}
