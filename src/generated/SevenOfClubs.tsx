import { type CardProps } from "./types";
import image from "../../images/cards/sevenOfClubs.webp";

export function SevenOfClubs(props: CardProps) {
  return <img src={image} alt={"Seven of Clubs"} {...props} />;
}
