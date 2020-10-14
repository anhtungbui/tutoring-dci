/*
Retrieve the Subreddit
source: edabit 
https://edabit.com/challenge/WT5MGmgaP3jvx8qpt

Create a function to extract the name of the subreddit from its URL.

**Examples

subReddit("https://www.reddit.com/r/funny/") ➞ "funny"

subReddit("https://www.reddit.com/r/relationships/") ➞ "relationships"

subReddit("https://www.reddit.com/r/mildlyinteresting/") ➞ "mildlyinteresting"
*/

function subReddit(url) {
  const regex = /\/\w+\/$/;
  // Equivalent to
  // const regex = /\/[a-z]+\/$/i;
  const result = url.match(regex)[0].slice(1, -1);
  return result;
}

console.log(subReddit('https://www.reddit.com/r/funny/'));
console.log(subReddit('https://www.reddit.com/r/relationships/'));
console.log(subReddit('https://www.reddit.com/r/AskMen/'));
