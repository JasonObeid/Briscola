import { type CardProps } from "./types";
import image from "../../images/cards/fourOfClubs.webp";

export function FourOfClubs(props: CardProps) {
  return <img src={image} alt={"Four of Clubs"} {...props} />;
}
