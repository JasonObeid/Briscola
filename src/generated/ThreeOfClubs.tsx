import { type CardProps } from "./types";
import image from "../../images/cards/threeOfClubs.webp";

export function ThreeOfClubs(props: CardProps) {
  return <img src={image} alt={"Three of Clubs"} {...props} />;
}
