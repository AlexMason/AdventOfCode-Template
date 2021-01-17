import ISolution from "./ISolution";

type Solution2Params = {
  data: string;
};

export default class Solution2 implements ISolution {
  data_raw: string;
  data_parsed: string;

  constructor(parameters: Solution2Params) {
    this.data_raw = parameters.data;
    this.data_parsed = this.data_raw;
  }

  result(): string {
    throw new Error("Method not implemented.");
  }
}
