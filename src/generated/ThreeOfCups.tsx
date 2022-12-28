import { type CardProps } from "./types";
import image from "../../images/cards/threeOfCups.webp";

export function ThreeOfCups(props: CardProps) {
  return <img src={image} alt={"Three of Cups"} {...props} />;
}
