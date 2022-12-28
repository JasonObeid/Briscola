import { type CardProps } from "./types";
import image from "../../images/cards/sevenOfCoins.webp";

export function SevenOfCoins(props: CardProps) {
  return <img src={image} alt={"Seven of Coins"} {...props} />;
}
