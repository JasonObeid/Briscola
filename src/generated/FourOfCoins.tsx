import { type CardProps } from "./types";
import image from "../../images/cards/fourOfCoins.webp";

export function FourOfCoins(props: CardProps) {
  return <img src={image} alt={"Four of Coins"} {...props} />;
}
