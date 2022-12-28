import { type CardProps } from "./types";
import image from "../../images/cards/kingOfClubs.webp";

export function KingOfClubs(props: CardProps) {
  return <img src={image} alt={"King of Clubs"} {...props} />;
}
