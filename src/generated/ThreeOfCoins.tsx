import { type CardProps } from "./types";
import image from "../../images/cards/threeOfCoins.webp";

export function ThreeOfCoins(props: CardProps) {
  return <img src={image} alt={"Three of Coins"} {...props} />;
}
