# Punchh Lead Automation Engineer challenge
Thanks for your interest in Punchh and for taking out the time to do our challenge.

## Task 1
This task is to write an automated test suite for the our public website: [https://punchh.com](https://punchh.com)

### Test the search box
1. On the home page, click on the search sign on the top toolbar. Enter any word W in the search box. Validate that after successfully searching for it, the next time the box is prefilled with the word W.  
2. Enter the word loyalty in the search box. You should see multiple results for it. Write a test to make sure that the results always appear in the same order for a given word.

## Task 2
This task is to write a small automation framework that will automate the testing of a Mock Restful API.
* Install node.js > v10.0.0

* clone this repository and run

  ```bash
  git clone https://github.com/punchh/automation_test.git
  cd automation_test
  npm install
  ```

* Run the Mock API server (http://localhost:8081)

  ```bash
  npm run json
  ```

There are two endpoints:
* **Business** - http://localhost:8081/business
* **Locations** - http://localhost:8081/locations

Your test automation script should test the following HTTP methods:

* **GET** - for querying data
* **POST** - for creating new resources
* **PUT** - for updating existing resources
* **DELETE** - for deleting resources

## Technologies
The assignment can be developed in any testing framework of your choice.

## Submission Guidelines
- Submit your project in a single `zip` file to your contact.
- Include a `README.md` with instructions on how to run the project with any assumptions, design decisions you made, anything specific you want to share, etc.
- Include clear instructions on how to run the test suite.




