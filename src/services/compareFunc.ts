import { Promotion } from "../interfaces/Promotion";

const compareFunction = (a: Promotion, b: Promotion) => {
  if (a.sequence < b.sequence) {
    return -1;
  }
  if (a.sequence > b.sequence) {
    return 1;
  }
  return 0;
};

export default compareFunction;
