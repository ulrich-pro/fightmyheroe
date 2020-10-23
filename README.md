This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Goal

Know more about heroes and their powerstats.

## Principe

Each period a heroe is set at the stared and reasons this choice is made are explained at the launch of the projet (at home)
We can choose to fight this heroe against others (choosen randomly by default or you can search one), based on their powerstats.
At the end of each fight a details of the powerstats for each fighter is available in order to know more about them.
An history of all fights is also available when fighting.

Heroes datas come from https://superheroapi.com/

## Technical Features

- Atomic Design as project architecture https://atomicdesign.bradfrost.com/table-of-contents/
- Redux as store
- react-bootstrap as UI framework
- PropTypes as props type validation
- styled-components as component styling (CSS in JS)
- storybook graphical UI exposing available components in the project https://storybook.js.org/

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint`

Lint your project javascript files with eslint and display coding style errors

### `yarn stylelint`

Lint your project styles file with stylelint and display coding style errors

### `yarn precommit`

Run precommit hook to lint your project in order to commit only code that are correct syntaxically.

### `yarn analyse`

Analyse your code and display files/lib that are space consumming

### `yarn storybook`

Display the storybook of the available components in your project. (see http://storybook.js.org/ for more)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
