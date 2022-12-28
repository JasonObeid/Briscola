import { type CardProps } from "./types";
import image from "../../images/cards/knaveOfSwords.webp";

export function KnaveOfSwords(props: CardProps) {
  return <img src={image} alt={"Knave of Swords"} {...props} />;
}
