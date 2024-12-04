Tech Quiz Application - Comprehensive Testing with Cypress
==========================================================

Description
-----------

The **Tech Quiz Application** is a full-stack application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This app allows users to take a tech quiz with 10 randomly generated questions, test their knowledge, and view their score. It provides users with the option to start a new quiz upon completion, ensuring a continuous learning experience.

This project focuses on implementing comprehensive testing using **Cypress**, covering both component and end-to-end (E2E) tests to ensure the app's reliability and robustness under various conditions.

Features
--------

-   Start a tech quiz with random questions.
-   View one question at a time and progress through the quiz.
-   View the final score upon completing the quiz.
-   Option to start a new quiz after completing the current one.
-   Fully tested using Cypress for:
    -   Component-level testing.
    -   End-to-end (E2E) testing.

* * * * *

Table of Contents
-----------------

1.  [Installation](#installation)
2.  [Usage](#usage)
3.  [Testing](#testing)
4.  [Project Structure](#project-structure)
5.  [Walkthrough Video](#walkthrough-video)
6.  [License](#license)

* * * * *

Installation
------------

### Prerequisites

-   Node.js and npm installed on your machine.
-   MongoDB installed and running locally or access to a MongoDB Atlas cluster.
-   Git for version control.

### Steps

1.  Clone the repository:

    bash

    Copy code

    `git clone <repository-url>
    cd tech-quiz-application`

2.  Install dependencies for both the client and server:

    bash

    Copy code

    `cd client
    npm install
    cd ../server
    npm install`

3.  Set up environment variables:

    -   Rename the `.env.example` file in the `server` directory to `.env`.

    -   Fill in the required environment variables:

        env

        Copy code

        `MONGO_URI=<your-mongodb-connection-string>
        PORT=3001`

4.  Start the application:

    bash

    Copy code

    `npm run start:dev`

* * * * *

Usage
-----

1.  Open the application in your browser at `http://localhost:3000`.
2.  Click the **Start Quiz** button to begin.
3.  Answer each question by selecting an option.
4.  View your final score at the end of the quiz.
5.  Start a new quiz by clicking the restart button.

* * * * *

Testing
-------

### Cypress Configuration

This project uses Cypress for automated testing. Tests are organized into **component tests** and **end-to-end (E2E) tests**.

### Running Tests

1.  Install Cypress as a dev dependency:

    bash

    Copy code

    `npm install cypress --save-dev`

2.  Open Cypress test runner:

    bash

    Copy code

    `npx cypress open`

3.  Run the tests by selecting the desired test suite (component or E2E).

### Test Coverage

#### Component Tests

-   Location: `cypress/component/Quiz.cy.jsx`
-   Covers the **Quiz component**, ensuring:
    -   Questions are displayed correctly.
    -   Answers are selectable.
    -   Navigation between questions works as expected.

#### End-to-End Tests

-   Location: `cypress/e2e/quiz.cy.js`
-   Covers the entire application workflow:
    -   Start quiz functionality.
    -   Question-answer interaction.
    -   Score display and new quiz initiation.

* * * * *

Project Structure
-----------------
```md
.
├── client/                 # React front-end
│   ├── public/
│   ├── src/
│       ├── components/     # React components
│       ├── App.js          # Main application file
│       └── index.js        # React entry point
├── server/                 # Express back-end
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── seeds/              # Quiz questions and seed data
│   └── server.js           # Entry point for server
├── cypress/                # Cypress tests
│   ├── component/          # Component test cases
│   ├── e2e/                # End-to-end test cases
│   ├── fixtures/           # Mock data for testing
│   └── tsconfig.json       # Cypress TypeScript configuration
├── .gitignore              # Files to ignore in version control
├── cypress.config.ts       # Cypress configuration file
├── package.json            # Node.js dependencies and scripts
├── README.md               # Project documentation
└── tsconfig.json           # TypeScript configuration`
```
* * * * *

Walkthrough Video
-----------------

A walkthrough video demonstrating the functionality and testing of this application is available here:

**Tech Quiz Walkthrough Video**

https://drive.google.com/file/d/1PmmpctKEQ81bfniRv-uoLsSAWnKvFq-n/view?usp=sharing

This video covers:

1.  How to start the application from the command line.
2.  Component and end-to-end tests running successfully in the Cypress test runner.
3.  Application functionality, including starting a quiz, answering questions, and viewing the final score.

* * * * *

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.

* * * * *

Questions or Feedback?
----------------------

For any questions or feedback, feel free to reach out via the GitHub Issues page.