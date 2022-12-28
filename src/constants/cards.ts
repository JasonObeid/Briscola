import {
  TwoOfCoins,
  FourOfCoins,
  FiveOfCoins,
  SixOfCoins,
  SevenOfCoins,
  KnaveOfCoins,
  KnightOfCoins,
  KingOfCoins,
  ThreeOfCoins,
  AceOfCoins,
  TwoOfSwords,
  FourOfSwords,
  FiveOfSwords,
  SixOfSwords,
  SevenOfSwords,
  KnaveOfSwords,
  KnightOfSwords,
  KingOfSwords,
  ThreeOfSwords,
  AceOfSwords,
  TwoOfCups,
  FourOfCups,
  FiveOfCups,
  SixOfCups,
  SevenOfCups,
  KnaveOfCups,
  KnightOfCups,
  KingOfCups,
  ThreeOfCups,
  AceOfCups,
  TwoOfClubs,
  FourOfClubs,
  FiveOfClubs,
  SixOfClubs,
  SevenOfClubs,
  KnaveOfClubs,
  KnightOfClubs,
  KingOfClubs,
  ThreeOfClubs,
  AceOfClubs,
} from "../generated";
import { CardProps } from "../generated/types";

export type Suit = "Coins" | "Swords" | "Cups" | "Clubs";
export type Card = {
  key: CardKeys;
  suit: Suit;
  strength: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  points: 0 | 2 | 3 | 4 | 10 | 11;
  imagePath: string;
  alt: string;
};
export type CardKeys =
  | "twoOfCoins"
  | "fourOfCoins"
  | "fiveOfCoins"
  | "sixOfCoins"
  | "sevenOfCoins"
  | "knaveOfCoins"
  | "knightOfCoins"
  | "kingOfCoins"
  | "threeOfCoins"
  | "aceOfCoins"
  | "twoOfSwords"
  | "fourOfSwords"
  | "fiveOfSwords"
  | "sixOfSwords"
  | "sevenOfSwords"
  | "knaveOfSwords"
  | "knightOfSwords"
  | "kingOfSwords"
  | "threeOfSwords"
  | "aceOfSwords"
  | "twoOfCups"
  | "fourOfCups"
  | "fiveOfCups"
  | "sixOfCups"
  | "sevenOfCups"
  | "knaveOfCups"
  | "knightOfCups"
  | "kingOfCups"
  | "threeOfCups"
  | "aceOfCups"
  | "twoOfClubs"
  | "fourOfClubs"
  | "fiveOfClubs"
  | "sixOfClubs"
  | "sevenOfClubs"
  | "knaveOfClubs"
  | "knightOfClubs"
  | "kingOfClubs"
  | "threeOfClubs"
  | "aceOfClubs";

// Coins
const twoOfCoins: Card = {
  key: "twoOfCoins",
  suit: "Coins",
  strength: 1,
  points: 0,
  imagePath: "/images/cards/twoOfCoins.webp",
  alt: "Two of Coins",
};

const fourOfCoins: Card = {
  key: "fourOfCoins",
  suit: "Coins",
  strength: 2,
  points: 0,
  imagePath: "/images/cards/fourOfCoins.webp",
  alt: "Four of Coins",
};

const fiveOfCoins: Card = {
  key: "fiveOfCoins",
  suit: "Coins",
  strength: 3,
  points: 0,
  imagePath: "/images/cards/fiveOfCoins.webp",
  alt: "Five of Coins",
};

const sixOfCoins: Card = {
  key: "sixOfCoins",
  suit: "Coins",
  strength: 4,
  points: 0,
  imagePath: "/images/cards/sixOfCoins.webp",
  alt: "Six of Coins",
};

const sevenOfCoins: Card = {
  key: "sevenOfCoins",
  suit: "Coins",
  strength: 5,
  points: 0,
  imagePath: "/images/cards/sevenOfCoins.webp",
  alt: "Seven of Coins",
};

const knaveOfCoins: Card = {
  key: "knaveOfCoins",
  suit: "Coins",
  strength: 6,
  points: 2,
  imagePath: "/images/cards/knaveOfCoins.webp",
  alt: "Knave of Coins",
};

const knightOfCoins: Card = {
  key: "knightOfCoins",
  suit: "Coins",
  strength: 7,
  points: 3,
  imagePath: "/images/cards/knightOfCoins.webp",
  alt: "Knight of Coins",
};

const kingOfCoins: Card = {
  key: "kingOfCoins",
  suit: "Coins",
  strength: 8,
  points: 4,
  imagePath: "/images/cards/kingOfCoins.webp",
  alt: "King of Coins",
};

const threeOfCoins: Card = {
  key: "threeOfCoins",
  suit: "Coins",
  strength: 9,
  points: 10,
  imagePath: "/images/cards/threeOfCoins.webp",
  alt: "Three of Coins",
};

const aceOfCoins: Card = {
  key: "aceOfCoins",
  suit: "Coins",
  strength: 10,
  points: 11,
  imagePath: "/images/cards/aceOfCoins.webp",
  alt: "Ace of Coins",
};

// Swords

const twoOfSwords: Card = {
  key: "twoOfSwords",
  suit: "Swords",
  strength: 1,
  points: 0,
  imagePath: "/images/cards/twoOfSwords.webp",
  alt: "Two of Swords",
};

const fourOfSwords: Card = {
  key: "fourOfSwords",
  suit: "Swords",
  strength: 2,
  points: 0,
  imagePath: "/images/cards/fourOfSwords.webp",
  alt: "Four of Swords",
};

const fiveOfSwords: Card = {
  key: "fiveOfSwords",
  suit: "Swords",
  strength: 3,
  points: 0,
  imagePath: "/images/cards/fiveOfSwords.webp",
  alt: "Five of Swords",
};

const sixOfSwords: Card = {
  key: "sixOfSwords",
  suit: "Swords",
  strength: 4,
  points: 0,
  imagePath: "/images/cards/sixOfSwords.webp",
  alt: "Six of Swords",
};

const sevenOfSwords: Card = {
  key: "sevenOfSwords",
  suit: "Swords",
  strength: 5,
  points: 0,
  imagePath: "/images/cards/sevenOfSwords.webp",
  alt: "Seven of Swords",
};

const knaveOfSwords: Card = {
  key: "knaveOfSwords",
  suit: "Swords",
  strength: 6,
  points: 2,
  imagePath: "/images/cards/knaveOfSwords.webp",
  alt: "Knave of Swords",
};

const knightOfSwords: Card = {
  key: "knightOfSwords",
  suit: "Swords",
  strength: 7,
  points: 3,
  imagePath: "/images/cards/knightOfSwords.webp",
  alt: "Knight of Swords",
};

const kingOfSwords: Card = {
  key: "kingOfSwords",
  suit: "Swords",
  strength: 8,
  points: 4,
  imagePath: "/images/cards/kingOfSwords.webp",
  alt: "King of Swords",
};

const threeOfSwords: Card = {
  key: "threeOfSwords",
  suit: "Swords",
  strength: 9,
  points: 10,
  imagePath: "/images/cards/threeOfSwords.webp",
  alt: "Three of Swords",
};

const aceOfSwords: Card = {
  key: "aceOfSwords",
  suit: "Swords",
  strength: 10,
  points: 11,
  imagePath: "/images/cards/aceOfSwords.webp",
  alt: "Ace of Swords",
};

// Cups

const twoOfCups: Card = {
  key: "twoOfCups",
  suit: "Cups",
  strength: 1,
  points: 0,
  imagePath: "/images/cards/twoOfCups.webp",
  alt: "Two of Cups",
};

const fourOfCups: Card = {
  key: "fourOfCups",
  suit: "Cups",
  strength: 2,
  points: 0,
  imagePath: "/images/cards/fourOfCups.webp",
  alt: "Four of Cups",
};

const fiveOfCups: Card = {
  key: "fiveOfCups",
  suit: "Cups",
  strength: 3,
  points: 0,
  imagePath: "/images/cards/fiveOfCups.webp",
  alt: "Five of Cups",
};

const sixOfCups: Card = {
  key: "sixOfCups",
  suit: "Cups",
  strength: 4,
  points: 0,
  imagePath: "/images/cards/sixOfCups.webp",
  alt: "Six of Cups",
};

const sevenOfCups: Card = {
  key: "sevenOfCups",
  suit: "Cups",
  strength: 5,
  points: 0,
  imagePath: "/images/cards/sevenOfCups.webp",
  alt: "Seven of Cups",
};

const knaveOfCups: Card = {
  key: "knaveOfCups",
  suit: "Cups",
  strength: 6,
  points: 2,
  imagePath: "/images/cards/knaveOfCups.webp",
  alt: "Knave of Cups",
};

const knightOfCups: Card = {
  key: "knightOfCups",
  suit: "Cups",
  strength: 7,
  points: 3,
  imagePath: "/images/cards/knightOfCups.webp",
  alt: "Knight of Cups",
};

const kingOfCups: Card = {
  key: "kingOfCups",
  suit: "Cups",
  strength: 8,
  points: 4,
  imagePath: "/images/cards/kingOfCups.webp",
  alt: "King of Cups",
};

const threeOfCups: Card = {
  key: "threeOfCups",
  suit: "Cups",
  strength: 9,
  points: 10,
  imagePath: "/images/cards/threeOfCups.webp",
  alt: "Three of Cups",
};

const aceOfCups: Card = {
  key: "aceOfCups",
  suit: "Cups",
  strength: 10,
  points: 11,
  imagePath: "/images/cards/aceOfCups.webp",
  alt: "Ace of Cups",
};

// Clubs

const twoOfClubs: Card = {
  key: "twoOfClubs",
  suit: "Clubs",
  strength: 1,
  points: 0,
  imagePath: "/images/cards/twoOfClubs.webp",
  alt: "Two of Clubs",
};

const fourOfClubs: Card = {
  key: "fourOfClubs",
  suit: "Clubs",
  strength: 2,
  points: 0,
  imagePath: "/images/cards/fourOfClubs.webp",
  alt: "Four of Clubs",
};

const fiveOfClubs: Card = {
  key: "fiveOfClubs",
  suit: "Clubs",
  strength: 3,
  points: 0,
  imagePath: "/images/cards/fiveOfClubs.webp",
  alt: "Five of Clubs",
};

const sixOfClubs: Card = {
  key: "sixOfClubs",
  suit: "Clubs",
  strength: 4,
  points: 0,
  imagePath: "/images/cards/sixOfClubs.webp",
  alt: "Six of Clubs",
};

const sevenOfClubs: Card = {
  key: "sevenOfClubs",
  suit: "Clubs",
  strength: 5,
  points: 0,
  imagePath: "/images/cards/sevenOfClubs.webp",
  alt: "Seven of Clubs",
};

const knaveOfClubs: Card = {
  key: "knaveOfClubs",
  suit: "Clubs",
  strength: 6,
  points: 2,
  imagePath: "/images/cards/knaveOfClubs.webp",
  alt: "Knave of Clubs",
};

const knightOfClubs: Card = {
  key: "knightOfClubs",
  suit: "Clubs",
  strength: 7,
  points: 3,
  imagePath: "/images/cards/knightOfClubs.webp",
  alt: "Knight of Clubs",
};

const kingOfClubs: Card = {
  key: "kingOfClubs",
  suit: "Clubs",
  strength: 8,
  points: 4,
  imagePath: "/images/cards/kingOfClubs.webp",
  alt: "King of Clubs",
};

const threeOfClubs: Card = {
  key: "threeOfClubs",
  suit: "Clubs",
  strength: 9,
  points: 10,
  imagePath: "/images/cards/threeOfClubs.webp",
  alt: "Three of Clubs",
};

const aceOfClubs: Card = {
  key: "aceOfClubs",
  suit: "Clubs",
  strength: 10,
  points: 11,
  imagePath: "/images/cards/aceOfClubs.webp",
  alt: "Ace of Clubs",
};

const denari: Card[] = [
  twoOfCoins,
  fourOfCoins,
  fiveOfCoins,
  sixOfCoins,
  sevenOfCoins,
  knaveOfCoins,
  knightOfCoins,
  kingOfCoins,
  threeOfCoins,
  aceOfCoins,
];
const spade: Card[] = [
  twoOfSwords,
  fourOfSwords,
  fiveOfSwords,
  sixOfSwords,
  sevenOfSwords,
  knaveOfSwords,
  knightOfSwords,
  kingOfSwords,
  threeOfSwords,
  aceOfSwords,
];
const coppe: Card[] = [
  twoOfCups,
  fourOfCups,
  fiveOfCups,
  sixOfCups,
  sevenOfCups,
  knaveOfCups,
  knightOfCups,
  kingOfCups,
  threeOfCups,
  aceOfCups,
];
const bastoni: Card[] = [
  twoOfClubs,
  fourOfClubs,
  fiveOfClubs,
  sixOfClubs,
  sevenOfClubs,
  knaveOfClubs,
  knightOfClubs,
  kingOfClubs,
  threeOfClubs,
  aceOfClubs,
];

export const deck: Card[] = [...denari, ...spade, ...coppe, ...bastoni];

export const cardsMap: Record<CardKeys, (props: CardProps) => JSX.Element> = {
  twoOfCoins: TwoOfCoins,
  fourOfCoins: FourOfCoins,
  fiveOfCoins: FiveOfCoins,
  sixOfCoins: SixOfCoins,
  sevenOfCoins: SevenOfCoins,
  knaveOfCoins: KnaveOfCoins,
  knightOfCoins: KnightOfCoins,
  kingOfCoins: KingOfCoins,
  threeOfCoins: ThreeOfCoins,
  aceOfCoins: AceOfCoins,
  twoOfSwords: TwoOfSwords,
  fourOfSwords: FourOfSwords,
  fiveOfSwords: FiveOfSwords,
  sixOfSwords: SixOfSwords,
  sevenOfSwords: SevenOfSwords,
  knaveOfSwords: KnaveOfSwords,
  knightOfSwords: KnightOfSwords,
  kingOfSwords: KingOfSwords,
  threeOfSwords: ThreeOfSwords,
  aceOfSwords: AceOfSwords,
  twoOfCups: TwoOfCups,
  fourOfCups: FourOfCups,
  fiveOfCups: FiveOfCups,
  sixOfCups: SixOfCups,
  sevenOfCups: SevenOfCups,
  knaveOfCups: KnaveOfCups,
  knightOfCups: KnightOfCups,
  kingOfCups: KingOfCups,
  threeOfCups: ThreeOfCups,
  aceOfCups: AceOfCups,
  twoOfClubs: TwoOfClubs,
  fourOfClubs: FourOfClubs,
  fiveOfClubs: FiveOfClubs,
  sixOfClubs: SixOfClubs,
  sevenOfClubs: SevenOfClubs,
  knaveOfClubs: KnaveOfClubs,
  knightOfClubs: KnightOfClubs,
  kingOfClubs: KingOfClubs,
  threeOfClubs: ThreeOfClubs,
  aceOfClubs: AceOfClubs,
};
