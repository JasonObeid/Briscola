import { Game } from "boardgame.io";
import { Card, deck } from "./cards";
import { shuffleDeck } from "./utils";

export type BriscPlayerID = "0" | "1";
export interface BriscolaState {
  briscola: Card;
  player_0: {
    cards: Card[];
    played: Card | null;
    pile: Card[];
  };
  player_1: {
    cards: Card[];
    played: Card | null;
    pile: Card[];
  };
  evaluated: boolean;
  deckOnBoard: Card[];
  winner: BriscPlayerID;
  loser: BriscPlayerID;
  middle: Card[];
  previousRound: Card[];
  secret: string;
}

export type BriscolaMoves = {
  playCard: ({ cardIndex }: { cardIndex: number }) => void;
};

export const Briscola: Game<BriscolaState> = {
  name: "Briscola",

  setup: prepareGame,

  phases: {
    draw: {
      moves: {},
      next: "play",
      start: true,
      endIf: ({ G }) =>
        (G.player_0.cards.length === 3 && G.player_1.cards.length === 3) ||
        G.deckOnBoard.length === 0,
      onBegin({ G }) {
        const winner = G.winner === "0" ? "player_0" : "player_1";
        const loser = G.loser === "0" ? "player_0" : "player_1";

        if (G.deckOnBoard.length > 1) {
          G[winner].cards.push(
            G.deckOnBoard.splice(G.deckOnBoard.length - 1, 1)[0],
          );
          G[loser].cards.push(
            G.deckOnBoard.splice(G.deckOnBoard.length - 1, 1)[0],
          );
          // Both players received a new card from the deck. Entering a new round.
        } else if (G.deckOnBoard.length === 1) {
          G[winner].cards.push(
            G.deckOnBoard.splice(G.deckOnBoard.length - 1, 1)[0],
          );
          G[loser].cards.push(G.briscola);
          // The last card from the deck has been delt so briscola card goes to the loser of the last round. Entering a new round.
        }
      },
    },

    play: {
      turn: {
        order: {
          first: ({ G }) => parseInt(G.winner),
          next: ({ G }) => parseInt(G.loser),
        },
      },
      moves: {
        playCard: ({ ctx, G, events }, { cardIndex }) => {
          if (typeof cardIndex !== "number") {
            throw new Error(
              `cardIndex was not a number ${JSON.stringify(cardIndex)}`,
            );
          }
          const playerID: "player_0" | "player_1" =
            ctx.currentPlayer === "0" ? "player_0" : "player_1";
          const currentPlayer = G[playerID];
          currentPlayer.played = currentPlayer.cards.splice(cardIndex, 1)[0];
          G.middle.push(currentPlayer.played);

          events.endTurn();
        },
      },
      next: "compare",
      endIf: ({ G }) =>
        G.player_0.played !== null && G.player_1.played !== null,
      start: false,
    },

    compare: {
      moves: {},
      onBegin: ({ G }) => evaluate(G),
      endIf: ({ G }) => G.evaluated,
      onEnd: ({ G }) => {
        G.player_0.played = null;
        G.player_1.played = null;
        G.middle = [];
        G.evaluated = false;
      },
      next: "draw",
    },
  },

  minPlayers: 2,
  maxPlayers: 2,

  endIf: ({ ctx }) => ctx.turn === 41,
};

function prepareGame(): BriscolaState {
  const deckOnBoard = shuffleDeck([...deck]);
  if (deckOnBoard && deckOnBoard.length !== 40) {
    throw new Error("Deck is not 40 cards long");
  }

  const briscola = deckOnBoard.pop();
  if (!briscola) {
    throw new Error("Failed to draw briscola");
  }

  const initialGameState: BriscolaState = {
    player_0: {
      cards: [],
      pile: [],
      played: null,
    },

    player_1: {
      cards: [],
      pile: [],
      played: null,
    },

    briscola: briscola,
    deckOnBoard: deckOnBoard,
    evaluated: false,
    winner: "0",
    loser: "1",
    middle: [],
    previousRound: [],
    secret: "SECRET",
  };

  initialGameState.player_0.cards = initialGameState.deckOnBoard.splice(
    initialGameState.deckOnBoard.length - 3,
    3,
  );
  initialGameState.player_1.cards = initialGameState.deckOnBoard.splice(
    initialGameState.deckOnBoard.length - 3,
    3,
  );

  return initialGameState;
}

function evaluate(G: BriscolaState) {
  const briscola = G.briscola;
  const p0 = G.player_0.played;
  const p1 = G.player_1.played;
  const p0pile = G.player_0.pile;
  const p1pile = G.player_1.pile;

  if (p0 && p1) {
    G.previousRound[0] = p0;
    G.previousRound[1] = p1;
    if (p0.suit === p1.suit) {
      if (p0.strength > p1.strength) {
        // Scenario 1: Both cards are of the same suit. Player 0 wins the round because his card has higher strength
        p0pile.push(p0);
        p0pile.push(p1);
        G.winner = "0";
        G.loser = "1";
      } else {
        // Scenario 1: Both cards are of the same suit. We compare strengths of the cards to determine a winner of the round
        // Player 1 wins the round because his card is stronger
        p1pile.push(p0);
        p1pile.push(p1);
        G.winner = "1";
        G.loser = "0";
      }
    } else if (briscola.suit === p0.suit && briscola.suit !== p1.suit) {
      // Scenardio 2: Only one of the players player a briscola card.
      // Player 0 wins the round by playing a briscola card
      p0pile.push(p0);
      p0pile.push(p1);
      G.winner = "0";
      G.loser = "1";
    } else if (briscola.suit !== p0.suit && briscola.suit === p1.suit) {
      // Scenardio 2: Only one of the players player a briscola card
      // Player 1 wins the round by playing a briscola card
      p1pile.push(p0);
      p1pile.push(p1);
      G.winner = "1";
      G.loser = "0";
    } else {
      // Scenario 3: No briscola card was played by either player and the played cards are not the same suit
      // Player who played the first card wins the round
      const winnerOfLastRound = G.winner === "0" ? "player_0" : "player_1";
      G[winnerOfLastRound].pile.push(p0);
      G[winnerOfLastRound].pile.push(p1);
    }

    G.evaluated = true;
  }
}
