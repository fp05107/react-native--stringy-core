// src/stringy-core/capitalize.ts

import { Capitalize } from "../types";

const capitalize: Capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export { capitalize };
