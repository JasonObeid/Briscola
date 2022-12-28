import { type CardProps } from "./types";
import image from "../../images/cards/sixOfClubs.webp";

export function SixOfClubs(props: CardProps) {
  return <img src={image} alt={"Six of Clubs"} {...props} />;
}
