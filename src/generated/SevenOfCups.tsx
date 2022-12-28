import { type CardProps } from "./types";
import image from "../../images/cards/sevenOfCups.webp";

export function SevenOfCups(props: CardProps) {
  return <img src={image} alt={"Seven of Cups"} {...props} />;
}
