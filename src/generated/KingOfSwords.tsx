import { type CardProps } from "./types";
import image from "../../images/cards/kingOfSwords.webp";

export function KingOfSwords(props: CardProps) {
  return <img src={image} alt={"King of Swords"} {...props} />;
}
