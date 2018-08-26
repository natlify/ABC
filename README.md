# Always Be Coding (ABC)

> Code Like Tmrw Depends On IT! ~ @arjithn

[![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
![GitHub language count](https://img.shields.io/github/languages/count/Arjith-Natarajan/ABC.svg)
![GitHub top language](https://img.shields.io/github/languages/top/Arjith-Natarajan/ABC.svg)
![GitHub](https://img.shields.io/github/license/Arjith-Natarajan/ABC.svg)



ABC is a master repo containing all code I've written solving problems on various popular competitive coding sites and other programming platforms,like HackerEarth, HackerRank, CodeChef, SPOJ to name a few.

The purpose of this repository is store my solutions and understand how my coding skills have improved over time. Explore to know more.
Let's get started.

## How to Use this Repo

You may be a potential recruiter, colleague, a friend or even a random stranger, interested to see my coding style/abilities. Here's how you can make sense out this repository.

### **Solutions** 
Only accepted solutions shall be recorded here. Also accepted solutions however inefficient they are would be recorded, as they stand as true measure of my coding ability at that point of time.
### **Directories** 
All problems have been grouped based on the site in which the questions have appeared, and alloted a separate folder in name of the site. For example `codechef` directory contains problems from the site
### **Files** 
The files containing solutions are named by the problem slugs on different sites, (in camel case). For example, Time Conversion program on hackerrank would named `timeConversion.js` (for solution in node.js)
### **Extensions** 
A question attempted in multiple programming languages would be named the same, the difference only in their extensions _(.cpp, .js, .java, .py... etc.)_. This way it becomes easy to track polyglot solutions.
### **File Suffixes** 
Incase a problem has several attempts(to provide improved solution) it would be indicated by problemname followed by `_n` where n can be version number from 2 to ∞.
### **Content** 
The file shall contain a link to the question its first few lines, followed by the solution submitted (as shown below)

```js
// highestAndLowest.js
// https://www.codewars.com/kata/554b4ac871d6813a03000035

const highAndLow = numbers => {
  const arr = numbers
    .split(" ")
    .map(i => parseInt(i, 10))
    .sort((a, b) => b - a);
  return `${arr[0]} ${arr[arr.length - 1]}`;
};
```
