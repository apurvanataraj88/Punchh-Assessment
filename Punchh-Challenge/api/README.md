# PunchhCodingChallenge
Coding assessment for Automated testing - API

## Setup the Mock API server
- Clone this repo into your project directory
- In the command line, navigate to this repo in your project directory with `cd Punchh-Challenge/api`
- To run the Mock API server, clone the server repo with`git clone https://github.com/punchh/automation_test.git`
- Navigate into the folder with`cd automation_test`
- Run `npm install` to install the dependencies
- Launch the server with `npm run json`
- The server is now running

## Postman setup
- We will now setup the test suite for the API using Postman. This can be downloaded from https://www.postman.com/downloads/.
- Once installed and launched, we will need to do 2 types of imports:
### Collection
  - On the top left side of the Postman tool, click on `Import` and then either drag-and-drop or use the File explorer/Finder to import the collection `PunchhAPI.postman_collection.json` which should be downloaded.
  - This will now display the collection with its 2 folders for testing requests for `Business` and `Location`
  ### Environment
  - Here we will import the different variables needed throughout the test suite.
  - Under the `Upgrade` button on the top-right side, there is an 'eye' icon.
  - Click that, and then click 'Add' in the top right corner of the pane.
  - Click the cancel button.
  - Here, we will click the Import button to get the required environment variables.
  - Click the Choose Files button and select the `punchhEnv.postman_environment.json` file which should be downloaded.
  - Close the pane, and we are now ready to run the collection.
- Click the Runner button on the top-left side and then select the collection `PunchhAPI`
- The list of requests in this collection are detailed on the right side.
- Select `punchhEnv` for your environment from the dropdown.
- Click the `Run PunchhAPI` button.
- A summary will be displayed after the suite has run.

## Validation and enhancements
Each request in the 2 folders have their own set of assertions in the `Test Scripts` tab to halp validate the response, as well as set the environment up for any subsequent tests without much user-interaction. As part of a future improvement, this collection can be run using Postman's command line tool `newman` and integrated with Slack using a CI pipeline to increase transparency across the team/company.
