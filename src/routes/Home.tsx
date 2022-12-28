import { Link } from "react-router-dom";
import { routes } from "../constants/routes";
import { generateCredentials } from "@boardgame.io/p2p";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * Form component to configure a peer-to-peer boardgame.io client.
 */
const credentials = generateCredentials();

const hostMatchID = uuidv4();
const placeholderMatchID = uuidv4();

export const Home = () => {
  const [matchID, setMatchID] = useState("");

  return (
    <div className="player min-h-screen">
      <div className="player-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to Briscola</h1>
          <p className="py-6">Create a match and invite a friend to play!</p>
          <Link
            to={routes.match}
            state={{
              isHost: true,
              playerID: "0",
              credentials,
              matchID: hostMatchID,
            }}
            className="btn btn-primary"
          >
            Create Match
          </Link>
          <div className="divider mt-32 mb-32">OR</div>
          <h3 className="text-xl mb-8">
            Have a friend&apos;s match ID? Enter it here to join!
          </h3>
          <div className="form-control gap-4">
            <label className="input-group input-group-vertical">
              <span>Match ID</span>
              <input
                type="text"
                placeholder={placeholderMatchID}
                className="input input-bordered"
                onInput={(e) => setMatchID(e.currentTarget.value)}
                value={matchID}
              />
            </label>
            {matchID.length === placeholderMatchID.length ? (
              <Link
                className="btn btn-secondary w-full"
                to={`${routes.match}?matchID=${matchID}`}
                state={{ isHost: false, playerID: "1", credentials, matchID }}
              >
                Connect
              </Link>
            ) : (
              <div className="tooltip" data-tip="Please enter a match ID.">
                <button
                  className="btn btn-secondary w-full btn-disabled"
                  disabled
                >
                  Connect
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
