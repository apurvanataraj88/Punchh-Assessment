# xeroCodingChallenge
Coding challenge for Automated testing

## Setup using Nightwatch
- Clone this repo into your project directory
- In the command line, navigate to this repo in your project directory
- Run `yarn` to install the dependencies in the `yarn.lock` file
- Run `npm install` to install the dependencies in the `package.json` file
- Test script `receiptUploadDelete.js` can be executed by running `nightwatch automation/receiptUploadDelete.js`

## Other Test Cases that can be created
- Settings Page
  - Add account (requires valid credit card/banking institution login)
    - 18 individual tests for a _successful_ integration with each partner
    - 18 individual tests for _unsuccessful_ sign in for each partner
    - 18 individual tests for verifying new sign-ups lead to partner website
  - Inviting Users successfully and invalid email ID's
  - Update Organization Details
  - Validate different stages of the trial period
  - Successful/unsuccessful updgrade to the account
  - Individual test for each type of integration (Accounting, Cloud, Email)
  - Update Profile details and validate changes
  
- Uploaded Receipt
  - Validate details of receipt displayed in the `DOCS` pane and the `Edit Document` pane match
  - Add and Delete a note for a receipt
  - Validate visibility of `Paid` banner across both panes of the uploaded receipt
  - Successfully integrate receipt with some/all partners
  - Add tags
  
- Search (requires an upload of atleast one receipt matching each criteria to validate accuracy), based on
  - Date
  - Amount
  - Supplier
  - Keyword
  - Document type
  
### About the script
The test script `receiptUploadDelete.js` tests the following in its flow:
  - Validating the different components on the Login page
  - Performing a successful login
  - Uploading a receipt and publishing it
  - Checking the presence of the various integration options of Hubdocs' partners
  - Deleting the uploaded receipt
  - Logging out
  
The test script performs these functions by interacting with page objects that have been conveniently placed in files specific to that page/operation. Each object contains its `locateStrategy` (xpath, css, etc.) and `selector` (element as loaded in the DOM) which are then incorporated in dedicated functions that can be used across the test suite. This modular structure not only allows for efficient scalability and reusability but also facilitates easy debugging during probable re-designs or when issues are encountered.

### Enhancements
This test suite can be scaled to test more UI of the platform for better coverage. This suite can also be integrated with `Artillery` to conduct load testing to help potentially improve on performance. Using `Travis CI` can allow reporting directly into a Slack channel to increase transparency across the team.
