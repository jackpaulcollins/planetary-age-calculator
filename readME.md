# Planetary Age Calculator
 _This app calculates a user's age & life expectancy based on what planet they're on_

### How to Use
* _Clone this repository to your machine, and run 'npm install' to download the dependencies._
* _Run 'npm run start' to build the project on a local server, or run 'npm test' to run tests on the project through Karma / Jasmine._



## Planning

1. Configuration/dependencies
  * Dependencies:

  Production Dependencies:
    "bootstrap": "^4.3.1", (frontend Framework, used for UI)
    "jquery": "^3.3.1", (JS library to make DOM queries easy, used on main.js)
    "popper.js": "^1.14.7", (bootstrap dependencies)
    "webpack": "4.19.1" (bundler to reduce payload of project)

  Development dependencies:
    "clean-webpack-plugin": "^0.1.18", (Ensures the dist file doesn't get clutter, used in development)
    "css-loader": "^0.28.10", (bundles styling with Webpack, used in dev)
    "eslint": "^4.18.2", (checks code for errors and typos, used in dev)
    "eslint-loader": "^2.0.0", (makes linter compatible with webpack)
    "html-webpack-plugin": "^3.0.6", (bundles HTML, used in dev)
    "jasmine": "^3.1.0", (allows user to write tests, used in dev)
    "jasmine-core": "^2.99.0", (testing dependencies)
    "karma": "^2.0.0", (virtual environment to run tests, used in dev)
    "karma-chrome-launcher": "^2.2.0", (launches Karma virtual environment, used in dev)
    "karma-cli": "^1.0.1", (configures Karm for terminal)
    "karma-jasmine": "^1.1.1", (allows functionality between Karma and Jasmine)
    "karma-jasmine-html-reporter": "^0.2.2",
    "karma-jquery": "^0.2.2", (allows Karma to understand jQuery)
    "karma-sourcemap-loader": "^0.3.7",
    "karma-webpack": "^2.0.13",
    "style-loader": "^0.20.2", (configures styling for webpack)
    "uglifyjs-webpack-plugin": "^1.2.2", ("uglifies" code to reduce package size)
    "webpack-cli": "^2.0.9", (configures webpack for terminal)
    "webpack-dev-server": "^3.1.0" (creates a virtual enviroment & server to allow hot developement, used in dev)


2. Specs
  * Spec 1: Determines in a user's age using their birthday, input: Dec. 8, 1988, output: "Age: 30"
  * Spec 2: Determines a user's age relevant to several planets (Mercury, Venus, Mars, Jupiter), input: age = 30, output: "Your age on Mercury is 7.2 years old".
  * Spec 3: Determines how many years a user would have left to live on each planet (using average life expectancy), input: age = 30, output: "On Jupiter, you're 355.8 years old! You should have died 277 years ago!"

### Known Bugs

*_The last test isn't worked out, since I changed the logic after initally writing the test_*

#### License
  * _This software is licensed under the MIT license_

Copyright (c) 2019 **Jack Collins**
