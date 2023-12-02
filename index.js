// index.js

import { Platform } from "react-native";

const reverseString = (str) => {
  // Add platform-specific logic if needed
  const reversed = str.split("").reverse().join("");
  return Platform.OS === "ios" ? reversed : reversed.toUpperCase();
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

module.exports = { reverseString, capitalize };
