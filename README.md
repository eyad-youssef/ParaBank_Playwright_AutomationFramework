
# Playwright Bank Website Testing Project

This repository contains a Playwright project for automated testing of a bank website. The tests can be executed in a Jenkins pipeline and generate HTML reports for detailed test execution results.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Test Execution](#test-execution)
- [Jenkins Pipeline](#jenkins-pipeline)
- [HTML Reports](#html-reports)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Prerequisites

Before running the tests, ensure that you have the following prerequisites installed:

- Node.js (version 14 or higher)
- NPM (Node Package Manager)
- Playwright

## Installation

To install the project and its dependencies, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/playwright-bank-testing.git
   ```

2. Navigate to the project directory:

   ```bash
   cd playwright-bank-testing
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Test Execution

To execute the tests locally, perform the following steps:

1. Ensure that the bank website is accessible.
2. Update the test configuration file (`config.js`) with the appropriate website URL and credentials, if required.
3. Run the tests using the following command:

   ```bash
   npm test
   ```

   This will execute all the test scripts defined in the `tests` directory.

## Jenkins Pipeline

This project includes a Jenkins file (`Jenkinsfile`) that sets up a pipeline for executing the tests in Jenkins. The pipeline is designed to be triggered automatically on every commit or can be manually triggered.

To set up the Jenkins pipeline, follow these steps:

1. Install and configure Jenkins on your server.
2. Create a new Jenkins pipeline job.
3. Configure the pipeline job to connect to your Git repository and specify the Jenkinsfile as the pipeline script.
4. Save the job configuration.
5. Trigger the pipeline manually or by committing changes to the repository.

## HTML Reports

HTML reports are generated using Playwright's built-in HTML reporter to provide detailed test execution results.

To view the HTML reports locally after test execution, follow these steps:

1. After test execution, navigate to the `test-results` directory.
2. Open the `report.html` file in a web browser to view the test execution results.

## Project Structure

The project follows a structured organization based on the functionality of the bank website. The main directories and files are as follows:

- `tests`: Contains the test scripts written using Playwright.
- `pages`: Contains the Page Objects representing the different pages of the bank website.
- `playwright.config.js`: Configuration file for storing website URLs, credentials, and other settings.
- `Jenkinsfile`: Jenkins pipeline configuration file for executing the tests.
- `package.json`: NPM package configuration file.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


Feel free to customize this README file based on your specific project requirements, adding or removing sections as needed. Ensure that you provide clear instructions for installation, test execution, Jenkins pipeline setup, and viewing HTML reports.
