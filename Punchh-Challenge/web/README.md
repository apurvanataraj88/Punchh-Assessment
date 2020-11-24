# PunchhCodingChallenge
Coding assessment for Automated testing

## Setup using Nightwatch
- Clone this repo into your project directory
- In the command line, navigate to this repo in your project directory with `cd Punchh-Challenge/web`
- Install nightwatch with `npm install nightwatch`
- Run `yarn` to install the dependencies in the `yarn.lock` file
- Run `npm install` to install the dependencies in the `package.json` file
- Page objects for this assessment are detailed in the `resultsForSearchTerm.js` file
- Test script `punchhAssessment.js` can be executed by running `nightwatch automation/punchhAssessment.js`
  
The test script performs these functions by interacting with page objects that have been conveniently placed in files specific to that page/operation. Each object contains its `locateStrategy` (xpath, css, etc.) and `selector` (element ID as loaded in the page) which are then incorporated in dedicated functions that can be used across the test suite. This modular structure not only allows for efficient scalability and reusability but also facilitates easy debugging during probable re-designs or when issues are encountered.

### Enhancements
This test suite can be scaled to test more UI of the platform for better coverage. Using `Travis CI` can allow reporting directly into a Slack channel to increase transparency across the team.
