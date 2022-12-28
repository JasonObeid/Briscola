import { type CardProps } from "./types";
import image from "../../images/cards/fiveOfClubs.webp";

export function FiveOfClubs(props: CardProps) {
  return <img src={image} alt={"Five of Clubs"} {...props} />;
}
