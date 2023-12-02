<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Native Stringy Core</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
    }
    h1, h2, h3 {
      color: #0366d6;
    }
    code {
      background-color: #f5f5f5;
      padding: 2px 4px;
      border-radius: 4px;
    }
    pre {
      background-color: #f5f5f5;
      padding: 8px;
      border-radius: 4px;
      overflow-x: auto;
    }
  </style>
</head>
<body>

<h1>React Native Stringy Core</h1>

<p>
  <a href="https://www.npmjs.com/package/react-native-stringy-core">
    <img src="https://badge.fury.io/js/react-native-stringy-core.svg" alt="npm version">
  </a>
  <a href="https://github.com/fp05107/react-native-stringy-core/issues">
    <img src="https://img.shields.io/github/issues/fp05107/react-native-stringy-core" alt="GitHub issues">
  </a>
  <a href="https://github.com/fp05107/react-native-stringy-core/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/fp05107/react-native-stringy-core" alt="GitHub license">
  </a>
</p>

<h2>Installation</h2>

<p>Install the package using npm:</p>

<pre>
npm install react-native-stringy-core
</pre>

<h2>Usage</h2>

<p>Import the desired string manipulation methods into your React Native project:</p>

<pre>
import {
  reverseString,
  capitalize,
  concatStrings,
  truncateString,
  countWords,
  shuffleString
} from 'react-native-stringy-core';
</pre>

<h3>Available Methods</h3>

<h4><code>reverseString</code></h4>

<p>Reverses a given string.</p>

<pre>
const reversed = reverseString('Hello, World!');
console.log(reversed); // Outputs: !dlroW ,olleH
</pre>

<h4><code>capitalize</code></h4>

<p>Capitalizes the first letter of a string.</p>

<pre>
const capitalized = capitalize('hello');
console.log(capitalized); // Outputs: Hello
</pre>

<h4><code>concatStrings</code></h4>

<p>Concatenates two strings.</p>

<pre>
const result = concatStrings('Hello', 'World!');
console.log(result); // Outputs: HelloWorld!
</pre>

<h4><code>truncateString</code></h4>

<p>Truncates a string to a specified maximum length.</p>

<pre>
const truncated = truncateString('This is a long text', 10);
console.log(truncated); // Outputs: This is a...
</pre>

<h4><code>countWords</code></h4>

<p>Counts the number of words in a string.</p>

<pre>
const wordCount = countWords('Hello world, how are you?');
console.log(wordCount); // Outputs: 6
</pre>

<h4><code>shuffleString</code></h4>

<p>Shuffles the characters of a string.</p>

<pre>
const shuffled = shuffleString('abcde');
console.log(shuffled); // Outputs: ebdca
</pre>

<h2>License</h2>

<p>This project is licensed under the ISC License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>
</html>
