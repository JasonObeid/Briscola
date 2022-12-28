import { type CardProps } from "./types";
import image from "../../images/cards/twoOfClubs.webp";

export function TwoOfClubs(props: CardProps) {
  return <img src={image} alt={"Two of Clubs"} {...props} />;
}
