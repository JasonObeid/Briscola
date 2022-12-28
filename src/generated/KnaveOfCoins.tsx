import { type CardProps } from "./types";
import image from "../../images/cards/knaveOfCoins.webp";

export function KnaveOfCoins(props: CardProps) {
  return <img src={image} alt={"Knave of Coins"} {...props} />;
}
