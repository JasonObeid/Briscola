import { Player } from "./Player";
import { Opponent } from "./Opponent";
import { Middle } from "./Middle";
import { BriscolaMoves, BriscolaState } from "../constants/game";
import { Card } from "../constants/cards";
import { BoardProps } from "boardgame.io/react";
import styles from "../styles/game.module.css";
import cardStyles from "../styles/card.module.css";
import { CommunityCards } from "./CommunityCards";
import { CopyMatchLinkButton } from "./CopyMatchLinkButton";
import pile from "../../images/pile.webp";

function determineOutcome(pile: Card[]) {
  const score = pile.reduce((acc, card) => acc + card.points, 0);

  if (score < 60) {
    return `You've lost with a score of ${score} points to ${
      120 - score
    } points.`;
  } else if (score === 60) {
    return "It's a tie! You both had 60 points.";
  } else {
    return `You've won with a score of ${score} points to ${
      120 - score
    } points.`;
  }
}

export function Board({
  G,
  ctx,
  moves,
  playerID,
  matchData,
  matchID,
}: BoardProps<BriscolaState>) {
  const { turn } = ctx;

  if (playerID !== "0" && playerID !== "1") {
    return null;
  }

  if (!moves?.playCard) {
    return null;
  }

  const player = playerID === "0" ? "player_0" : "player_1";
  const opponent = playerID === "0" ? "player_1" : "player_0";

  const playerIsHost = playerID === "0";
  const isOpponentConnected = matchData?.[1]?.isConnected === true;
  const activePlayerCount = matchData?.filter(
    (player) => player?.isConnected === true,
  ).length;

  return (
    <div className="flex flex-col justify-center items-center">
      {turn < 41 ? (
        <>
          <h1 className="text-lg lg:text-3xl lg:mb-2 mb-1">Briscola</h1>
          <h3 className="lg:text-xl lg:mb-8 mb-4">
            {activePlayerCount} of 2 players connected
          </h3>
          {playerIsHost && !isOpponentConnected ? (
            <div className="alert shadow-lg mb-12 max-w-xl bg-base-100">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-gray-500 flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>
                  <p>Share this link with a friend to invite them.</p>
                </div>
              </div>
              <CopyMatchLinkButton matchID={matchID} />
            </div>
          ) : null}
          <div className={styles.container}>
            <div className={`${styles.Middle} bg-lime-800 rounded-lg`}>
              <Middle playerID={playerID} G={G} ctx={ctx} />
            </div>
            <div className={styles.OpponentHand}>
              <Opponent playerID={playerID} G={G} />
            </div>
            <div className={styles.PlayerHand}>
              <Player
                playerID={playerID}
                G={G}
                ctx={ctx}
                moves={moves as BriscolaMoves}
              />
            </div>
            <div className={styles.Deck}>
              <CommunityCards G={G} />
            </div>
            <div className={styles.PlayerPile}>
              {G[player].pile.length > 0 ? (
                <img src={pile} alt="backside" className={cardStyles.pile} />
              ) : null}
            </div>
            <div className={styles.OpponentPile}>
              {G[opponent].pile.length > 0 ? (
                <img src={pile} alt="backside" className={cardStyles.pile} />
              ) : null}
            </div>
          </div>
        </>
      ) : (
        <p>{determineOutcome(G[player].pile)}</p>
      )}
    </div>
  );
}
