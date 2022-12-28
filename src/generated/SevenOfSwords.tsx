import { type CardProps } from "./types";
import image from "../../images/cards/sevenOfSwords.webp";

export function SevenOfSwords(props: CardProps) {
  return <img src={image} alt={"Seven of Swords"} {...props} />;
}
