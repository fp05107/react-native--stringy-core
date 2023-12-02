import { TruncateString } from "../types";

const truncateString: TruncateString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
};

export { truncateString };
