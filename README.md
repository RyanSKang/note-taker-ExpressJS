# NOTE-TAKER: EXPRESS JS
  
## Description:

An application using Express.JS called Note Taker that can be used to write and save notes. The main use will be to implement Express.JS back end that will save and retrive note data from a JSON file that is deployed through Heroku. The purpose of this challenge was to use express.js in the backend to create routes to our main javascript functions. In a sense, what I learned was that server.js allows us to start our application with our given connection and routes/middleware defined, while our controllers allows UI Data to be rendered within our local index.html/notes.html while our local JS handles our front end user interaction. Some challenges I faced was the order I was defining my modules and middleware because I needed to initialize the variable defined before accessing it. I also learned how to use my controllers to manipulate the application routes. One challenge I had was that I was creating my body into an object before pushing into an array so my texts were not displaying. Moreover, I installed a new npm package of Uniqid in order to create my IDs for each post. 

## User Story
```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Table of Contents:
- [Overview](#Overview)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage Instructions](#usage-instructions) 
- [Usage Screenshots](#screenshots)
- [Walkthrough Video](#walkthrough-video)
- [Credits](#credits)  

# Overview

## Acceptance Criteria
```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Installation
Git clone Repository: [note-taker-ExpressJS](https://github.com/RyanSKang/note-taker-ExpressJS) 

Following Installation Needed:

Express [v4.16.4](https://www.npmjs.com/package/express/v/4.16.4)
Uniqid [v^5.4.0"](https://www.npmjs.com/package/uniqid)  
  
You can access this application via heroku: 

## Usage Instructions
1. Open cloned repository  
2. Execute an npm install  
3. Execute node server.js  
4. Open on localhost:3001 or on Heroku: [Click_Here]()
5. Click "Get Started"  
6. Click "+" icon and name a title and notes under the title and click the save icon
7. Saved note should be displayed on the left column and when you click on it, the explicit notes should also be displayed on the right column

## Screenshots
### Figure 1. 

## Walkthrough Video


## Credits
-AskBCS learning assistant 
-1 on 1 tutor: Julio Valdez



