import { type CardProps } from "./types";
import image from "../../images/cards/sixOfCups.webp";

export function SixOfCups(props: CardProps) {
  return <img src={image} alt={"Six of Cups"} {...props} />;
}
