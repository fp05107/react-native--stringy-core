import { CountParticularLetter } from "../types";

const countParticularLetter: CountParticularLetter = (str, letter) => {
  let count: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
};

export { countParticularLetter };
