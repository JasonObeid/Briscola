import { type CardProps } from "./types";
import image from "../../images/cards/knaveOfCups.webp";

export function KnaveOfCups(props: CardProps) {
  return <img src={image} alt={"Knave of Cups"} {...props} />;
}
