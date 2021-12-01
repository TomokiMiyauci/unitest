// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
import { brightBlack, red } from "../deps.ts";

type CodeInfo = {
  code: string;
  lineNumber: number;
  column: number;
};

// /** insert something to beginning of line */
// function BOL(text: string, symbol: string): string {
//   return `${symbol}${text.replaceAll("\n", `\n${symbol}`)}`;
// }

function prettyCode({ code, lineNumber }: CodeInfo): string {
  const codes = code.split("\n");

  const sliced = codes.slice(
    lineNumber - 2,
    lineNumber + 2,
  );

  const numberedCodes = sliced.map((fragment, i) => {
    const number = i + lineNumber - 1;
    const isWrongLine = number === lineNumber;

    return `${isWrongLine ? red(">") : " "}  ${brightBlack(String(number))} ${
      brightBlack("|")
    }  ${isWrongLine ? fragment : brightBlack(fragment)}`;
  });

  return numberedCodes.join("\n");
}

export { prettyCode };
