import { type CardProps } from "./types";
import image from "../../images/cards/knaveOfClubs.webp";

export function KnaveOfClubs(props: CardProps) {
  return <img src={image} alt={"Knave of Clubs"} {...props} />;
}
