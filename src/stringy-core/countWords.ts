import { CountWords } from "../types";

const countWords: CountWords = (str) => {
    const words = str.split(/\s+/);
    return words.length;
  };
  
  export { countWords };