import { type CardProps } from "./types";
import image from "../../images/cards/kingOfCups.webp";

export function KingOfCups(props: CardProps) {
  return <img src={image} alt={"King of Cups"} {...props} />;
}
