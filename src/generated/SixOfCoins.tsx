import { type CardProps } from "./types";
import image from "../../images/cards/sixOfCoins.webp";

export function SixOfCoins(props: CardProps) {
  return <img src={image} alt={"Six of Coins"} {...props} />;
}
