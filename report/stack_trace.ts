// Copyright 2021-Present the Unitest authors. All rights reserved. MIT license.
type StackTrace = {
  file: string;
  methodName: string;
  lineNumber: number;
  column: number;
};

function parseStackTraceLine(line: string): StackTrace | null {
  const re =
    /^\s*at (?<methodName>\S+) \(?(?<file>\S+):(?<lineNumber>\d+):(?<column>\d+)\)?.*$/i;

  const result = re.exec(line);
  if (!result || !result.groups) return null;
  const { file, methodName, lineNumber, column } = result.groups;

  return {
    file,
    methodName,
    lineNumber: Number(lineNumber),
    column: Number(column),
  };
}

function parseStackTrace(stack: string): StackTrace[] {
  const lines = stack.split("\n");

  const traces = lines.map((line) => parseStackTraceLine(line));

  return traces.filter(Boolean) as StackTrace[];
}

export { parseStackTrace, parseStackTraceLine };
