# Mars App

This is the starting template for a Corndel training project to create a [React](https://reactjs.org/) Web Application which will display recent data from Mars obtained by NASA using [NASA's Open APIs](https://api.nasa.gov/).

## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/) - latest stable version
  - [NPM](https://www.npmjs.com/) should be bundled with this
- React Developer Tools
  - [Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  - [Firefox Extension](https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/)

## Setup

1. `cd` to the root directory of this repository.
1. Run `npm install`.
1. Open the project in VSCode.
1. Install the recommended extensions.
    - You can see these by running "_F1 -> Show Recommended Extensions_" in VSCode.

## Workflow

We'll be keeping track of the project tasks using [Trello](https://trello.com/).

- Sign up for a Trello account.
- Ask your trainer to add you to the Mars App Board.

The workflow should be as follows:

1. Assign yourself to a ticket from the "To Do" column in discussion with your trainer and move it to "In Progress".
1. Pull the latest version of `master`.
1. Create a new branch with name of the form `${ticketNumber}_ShortDescription`
    - e.g. `MARS-2_CreateRoverComponent`
1. Write some code!
1. Push to a remote branch on GitHub.
1. Create a [GitHub pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) for your ticket and [request a pull request review](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review) from your trainer.
1. Move the ticket to "In Review" in Trello.
1. Once your trainer has reviewed your code:
    - If there any changes needed, carry them out and push to GitHub again.
    - Repeat until both you and the reviewer are satisfied with the code.
1. Once your branch has been completely signed off, merge it into `master` and push.
1. Move the ticket to "Completed" and repeat!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the Mars App in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

## Deployment

We're hosting our app using [Firebase Hosting](https://firebase.google.com/docs/hosting).

To get set up with Firebase:

1. Sign into the [Firebase Console](https://console.firebase.google.com/) and let your trainer know the email address you use to log in.
1. Install the Firebase CLI globally by running `npm install -g firebase-tools`.

### Deployment steps

Remember to **confirm with your trainer before deploying anything to Firebase**

1. Build the project by running `npm run build`.
2. Deploy to Firebase by running `firebase deploy`.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
