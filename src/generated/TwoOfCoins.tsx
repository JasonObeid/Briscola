import { type CardProps } from "./types";
import image from "../../images/cards/twoOfCoins.webp";

export function TwoOfCoins(props: CardProps) {
  return <img src={image} alt={"Two of Coins"} {...props} />;
}
