import { Card } from "./cards";

export function shuffleDeck(deck: Card[]): Card[] {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}

export function storeCredentials(playerID: string, credentials: string): void {
  localStorage.setItem(`${playerID}-credentials`, JSON.stringify(credentials));
}

export function getCredentials(playerID: string): string | null {
  const maybeCredentials = localStorage.getItem(`${playerID}-credentials`);
  if (maybeCredentials) {
    try {
      const parsedCredentials = JSON.parse(maybeCredentials);
      return parsedCredentials;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  return null;
}
