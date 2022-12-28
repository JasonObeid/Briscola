import { type CardProps } from "./types";
import image from "../../images/cards/fiveOfCups.webp";

export function FiveOfCups(props: CardProps) {
  return <img src={image} alt={"Five of Cups"} {...props} />;
}
