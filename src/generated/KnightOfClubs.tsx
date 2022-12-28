import { type CardProps } from "./types";
import image from "../../images/cards/knightOfClubs.webp";

export function KnightOfClubs(props: CardProps) {
  return <img src={image} alt={"Knight of Clubs"} {...props} />;
}
