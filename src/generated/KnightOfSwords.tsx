import { type CardProps } from "./types";
import image from "../../images/cards/knightOfSwords.webp";

export function KnightOfSwords(props: CardProps) {
  return <img src={image} alt={"Knight of Swords"} {...props} />;
}
