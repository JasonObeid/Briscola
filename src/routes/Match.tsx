import { Client as ReactClient } from "boardgame.io/react";
import { P2P, generateCredentials } from "@boardgame.io/p2p";
import { Board } from "../components/Board";
import { Briscola } from "../constants/game";
import { redirect, useLocation, useSearchParams } from "react-router-dom";
import { getCredentials, storeCredentials } from "../constants/utils";

const guestCredentials = generateCredentials();
const guestPlayerID = "1";

export type MatchProps = {
  matchID: string;
  playerID: string;
};
export function Match() {
  const [params] = useSearchParams();
  const location = useLocation();

  if (location.state) {
    const { isHost, playerID, credentials, matchID } = location.state;

    if (isHost && matchID && credentials && playerID) {
      const Match = ReactClient({
        game: Briscola,
        board: Board,
        multiplayer: P2P({
          isHost,
          onError: (e) => {
            console.error(e.type);
          },
        }),
        loading: () => <progress className="progress w-56 m-auto" />,
        debug: false,
      });

      const storedCredentials = getCredentials(playerID);

      if (!storedCredentials) {
        storeCredentials(playerID, credentials);
      }

      return (
        <Match
          credentials={storedCredentials ?? credentials}
          matchID={matchID}
          playerID={playerID}
        />
      );
    }
  }

  const matchIDParam = params.get("matchID");

  if (matchIDParam) {
    const Match = ReactClient({
      game: Briscola,
      board: Board,
      multiplayer: P2P({
        isHost: false,
        onError: (e) => {
          console.error(e.type);
        },
      }),
      loading: () => <progress className="progress w-56 m-auto" />,
      debug: false,
    });

    const storedCredentials = getCredentials(guestPlayerID);

    if (!storedCredentials) {
      storeCredentials(guestPlayerID, guestCredentials);
    }

    return (
      <Match
        credentials={storedCredentials ?? guestCredentials}
        matchID={matchIDParam}
        playerID={guestPlayerID}
      />
    );
  }

  console.error("No matchID provided");
  redirect("/");
  return null;
}
