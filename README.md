# xeroCodingChallenge
Coding challenge for Automated testing

## Setup using Nightwatch
- Clone this repo into your project directory
- In the command line, navigate to this repo in your project directory
- Run `yarn` to install the dependencies in the `yarn.lock` file
- Run `npm install` to install the dependencies in the `package.json` file
- Test script `receiptUploadDelete.js` can be executed using `nightwatch automation/receiptUploadDelete.js`

## Test Cases
- Settings Page
  - Add account
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
  
- Search, based on
  - Date
  - Amount
  - Supplier
  - Keyword
  - Document type

These would require an upload of atleast one receipt matching each criteria to validate accuracy
