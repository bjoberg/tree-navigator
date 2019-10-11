# Tree Navigator

This project is a single page application that parses a json tree and visually represents its structure. Along with this, a user can search through the tree for any child node.

![Tree Navigator](./src/media/tree-navigator.gif)

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

- **TreeNode Keys**: Ideally I would not be using the node name as the id / key; however with the current data, the only way to default the tree open and stay open is to use non dynamic keys (i.e. node name). You can see the affects of this when you select a directory that has the same name as another directory... both will toggle.
- **Search Query**: The search query rerenders the entire tree every time a new search is made. In the future, I would like to modify the existing tree, instead of completely rerendering it.
- **Unit tests**: I wanted to keep my solution to a few hours of work, so I deprioritized unit tests; however to help describe my process for writing tests I included basic tests for the `<Search />` component
- **More user feedback while searching**: It would be nice if the user had more context for what was happening when they were typing in the search bar. Would be nice to return the number of results found and other miscellaneous status indicators.
- **Utilize the "type" field**: In the future, I would like to utilize the type field to display what type of node each tree item is (e.g. icon).
- **Dockerize**: Generic dockerfile for containerizing this application
- **Production server**: Add a production server (e.g. express) to server our bundled files

## Resources

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [Material UI](https://material-ui.com/) for the theme and jss
- [Ant Design's](https://ant.design/docs/react/introduce) Tree and Input components
