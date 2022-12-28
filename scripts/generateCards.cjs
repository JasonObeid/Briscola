// eslint-disable-next-line @typescript-eslint/no-var-requires
const deck = require("./cards.cjs").deck;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const writeFileSync = require("fs").writeFileSync;

const types = `
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export type CardProps = Omit<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  "src" | "alt"
>;
`;

writeFileSync("./src/generated/types.ts", types);

const generated = [];

for (const card of deck) {
  const { imagePath, alt } = card;
  const cardName = imagePath.split("/").pop().split(".")[0];
  const pascalCasedCardName = `${cardName[0].toUpperCase()}${cardName.slice(
    1,
  )}`;
  const cardContent = `import { type CardProps } from "./types";
                       import image from "../..${imagePath}";

                        export function ${pascalCasedCardName}(
                          props: CardProps,
                        ) {
                            return <img src={image} alt={"${alt}"} {...props} />;
                        }`;

  const filePath = `./src/generated/${pascalCasedCardName}.tsx`;
  writeFileSync(filePath, cardContent);

  generated.push({ key: cardName, componentName: pascalCasedCardName });
}

writeFileSync(
  `./src/generated/index.tsx`,
  generated
    .map(
      ({ componentName }) =>
        `export { ${componentName} } from "./${componentName}";`,
    )
    .join("\n"),
);

const a = `import { ${generated
  .map(({ componentName }) => componentName)
  .join(", ")} } from "../generated";`;

console.log(a);

const b = `const cardsMap = {
  ${generated
    .map(({ key, componentName }) => `${key}: ${componentName}`)
    .join(",\n")};
  }`;

console.log(b);
