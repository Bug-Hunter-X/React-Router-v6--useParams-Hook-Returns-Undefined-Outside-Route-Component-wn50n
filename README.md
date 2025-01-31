# React Router v6 useParams Hook Issue
This repository demonstrates a common error when using the `useParams` hook in React Router v6.  The `useParams` hook only works within components rendered by a route. Using it outside this context will result in undefined values.

The `bug.js` file shows the incorrect usage, while `bugSolution.js` provides the corrected implementation.

## How to reproduce
1. Clone this repository
2. Run `npm install`
3. Run `npm start`
4. Observe the console and the incorrect behavior in the browser.
5. Refer to `bugSolution.js` for the corrected implementation.