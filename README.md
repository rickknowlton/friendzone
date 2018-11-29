# friend{zone}
👫 friend{zone} is meant to simulate a simple dating app. The application is built on Node.js and Express and styled with Materialize CSS.


## Table of contents
  * [Installation](#installation)  
  * [How to Use](#how-to)
  * [System Requirements](#requirements)
  * [Local Installation](#installation)
  * [Technologies](#technologies)

## <a name="how-to"></a> How to Use
friend{zone} implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

## <a name="requirements"></a> System Requirements
- Terminal, Command Prompt, Bash, or the command line application of your choice
- [Node.js](https://nodejs.org/en/download/)

## <a name="installation"></a> Local Installation
- Clone or download the repository
- Open the root of the repository in your terminal
- Run the `npm install` command
- Run `npm start` spin up the server
- Then navigate to `http://localhost:3000/` to use the application

## <a name="technologies"></a> Technologies
- Javascript
- Node
- jQuery
- Express
- Materialize