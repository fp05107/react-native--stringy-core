// src/stringy-core/reverseString.ts

import { ReverseString } from "../types";

const reverseString: ReverseString = (str) => str.split('').reverse().join('');

export { reverseString };
