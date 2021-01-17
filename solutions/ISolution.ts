export default interface ISolution {
  data_raw: string;
  data_parsed: string;
  result(): string;
}
