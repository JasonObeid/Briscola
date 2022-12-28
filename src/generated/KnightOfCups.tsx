import { type CardProps } from "./types";
import image from "../../images/cards/knightOfCups.webp";

export function KnightOfCups(props: CardProps) {
  return <img src={image} alt={"Knight of Cups"} {...props} />;
}
