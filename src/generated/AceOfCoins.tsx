import { type CardProps } from "./types";
import image from "../../images/cards/aceOfCoins.webp";

export function AceOfCoins(props: CardProps) {
  return <img src={image} alt={"Ace of Coins"} {...props} />;
}
