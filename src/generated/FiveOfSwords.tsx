import { type CardProps } from "./types";
import image from "../../images/cards/fiveOfSwords.webp";

export function FiveOfSwords(props: CardProps) {
  return <img src={image} alt={"Five of Swords"} {...props} />;
}
