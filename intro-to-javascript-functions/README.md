# JavaScript Intro to Functions Lab

## Objectives

1. Understand how to declare and call functions
2. Manipulate strings with functions
3. Explain arguments and return values

## Introduction

Functions are at the core of programming. Essentially functions map an input ( **argument** ) to an output ( **return value** ).

We'll get some practice writing functions that change strings from uppercase letters to lowercase letters and back in this lab. 

Task #1: Define a function called yellMyBreakfast that has one argument called breakfast. It should return a yelled version of whatever string is passed into the function.

Task #2: Define a function called yellingOrWhispering that takes one argument called phrase. That function should return "yelling" if the phrase is all caps, whispering if the phrase is all lowercase, and talking if the phrase is mixed case. 

In Javascript, we can convert a string to all caps by using `.toUpperCase()`, and `.toLowerCase()` (ex. `'HELLO'.toLowerCase() // 'hello'`) to convert any string to all lowercase.

So, how do we check if a string is all lowercase or all uppercase?

```javascript
var allCaps = "YO!"

allCaps.toUpperCase() === allCaps // true

var whisper = 'ello.'

whisper.toLowerCase() === whisper // true
```

## Instructions
Write your code in index.js so that all the tests pass. Make sure to accomplish both of the tasks above!

