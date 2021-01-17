import ISolution from "./ISolution";

type Solution1Params = {
  data: string;
};

export default class Solution1 implements ISolution {
  data_raw: string;
  data_parsed: string;

  constructor(parameters: Solution1Params) {
    this.data_raw = parameters.data;
    this.data_parsed = this.data_raw;
  }

  result(): string {
    throw new Error("Method not implemented.");
  }
}
