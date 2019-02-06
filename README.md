This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Create first training React application and deploy to [GutHub Pages](https://pages.github.com/)**. </br>
Used following articles in the developing process which guided on the right decisions: </br>
[Deploy React with NPM](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d)</br>
[Deploy React with Yarn](https://dev.to/javascripterika/deploy-a-react-app-as-a-github-user-page-with-yarn-3fka)</br>

**Faced to following problems:**
1. Can't buld and deploy React application </br>
solution: it was neccessary to add **gh-pages** packages. Just in the current directory of your project:</br>
`$ yarn add gh-pages` and correct accordingly `package.json` if using Yarn or</br>
`$ npm install --save gh-pages` and adjust accordingly `package.json` if using NPM
2. After successful deploying the browser produced the error "404" - web app doesn't work</br>
solution: you have to delete the service worker file and any references to it in your index.js file... & remember to clear your browser cache (a hard refresh doesn't suffice) </br>
Removed followings lines in `index.js`: </br>
... </br>
`import * as serviceWorker from './serviceWorker';`</br>
... </br>
`serviceWorker.unregister();`

**Got the following skills:**
1. Set up the environment for developing: 
  - install Node.js - a JavaScript runtime environment,
  - set up NPM - package manager for JavaScript
2. create React app using standart Facebook framework create-react-app
3. learned how build the App with React Components structure 
4. using props and state in developing process 
5. creating form validation, using `onBlur` event handler
6. add styling to `style,js`and import to component page
7. add & commit & push on **GitHub**
8. deploy React app to [GitHub Pages](https://lemon57.github.io/react-intro/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
