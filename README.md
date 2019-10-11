# Tree Navigator

This project is a single page application that parses a json tree and visually represents its structure. Along with this, a user can search through the tree for any child node.

// TODO: Record giphy

## Local Setup

### Prerequisites

- Local installation of [node & npm](https://nodejs.org/en/download/)

### Installation

1. `git clone https://github.com/bjoberg/tree-navigator.git`
2. Navigate into the cloned directory
3. Run `npm install`
4. Run `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Things to Improve

- **Expand each item indiviually**: Was struggling to keep the tree expanded by default and allow each item to be toggled individually.
- **Textfield bug**: If you click on the tree, and then try to type in the search field you can only type on letter at a time because the DOM refocuses on the last tree item that you selected. Need to fix this for future iterations.
- **Search Query**: The search query rerenders the entire tree every time a new search is made. In future iterations, I would like to modify the existing tree, instead of completely rerendering it.
- **Unit tests**: I wanted to keep my solution to a few hours of work, so I deprioritized unit tests; however to help describe my process for writing tests I included basic tests for the `<Search />` component
- **More user feedback while searching**: It would be nice if the user had more context for what was happening when they were typing in the search bar. Would be nice to return number of results found, and other miscellaneous status indicators.
- **Utilize the "type" field**: In the future, I would like to utilize the type field to display what type of node each tree item is (e.g. icon).
- **Dockerize**: Generic dockerfile for containerizing this application
- **Production server**: Add a production server (e.g. express) to server our bundled files

## Resources

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
