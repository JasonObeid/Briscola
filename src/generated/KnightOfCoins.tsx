import { type CardProps } from "./types";
import image from "../../images/cards/knightOfCoins.webp";

export function KnightOfCoins(props: CardProps) {
  return <img src={image} alt={"Knight of Coins"} {...props} />;
}
