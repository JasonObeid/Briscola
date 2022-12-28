import { type CardProps } from "./types";
import image from "../../images/cards/kingOfCoins.webp";

export function KingOfCoins(props: CardProps) {
  return <img src={image} alt={"King of Coins"} {...props} />;
}
