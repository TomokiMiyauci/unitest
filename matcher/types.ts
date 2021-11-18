type Matcher = (
  value: any,
  ...args: any[]
) => MatchResult;

type MatchResult = {
  pass: boolean;
  message?: string;
};

export type { Matcher, MatchResult };
