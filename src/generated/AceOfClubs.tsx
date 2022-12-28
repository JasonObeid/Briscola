import { type CardProps } from "./types";
import image from "../../images/cards/aceOfClubs.webp";

export function AceOfClubs(props: CardProps) {
  return <img src={image} alt={"Ace of Clubs"} {...props} />;
}
