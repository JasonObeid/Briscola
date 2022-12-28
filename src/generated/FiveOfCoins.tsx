import { type CardProps } from "./types";
import image from "../../images/cards/fiveOfCoins.webp";

export function FiveOfCoins(props: CardProps) {
  return <img src={image} alt={"Five of Coins"} {...props} />;
}
