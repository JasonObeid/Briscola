import { type CardProps } from "./types";
import image from "../../images/cards/aceOfCups.webp";

export function AceOfCups(props: CardProps) {
  return <img src={image} alt={"Ace of Cups"} {...props} />;
}
