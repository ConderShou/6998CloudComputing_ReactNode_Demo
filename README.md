# 6998CloudComputing_Demo
ReactJS + NodeJS Demo for Spring 6998 Cloud Computing

A demonstration of basics in React and of linking the UI to a server backend

## Introduction
- Make sure you have the `npm` package installed. Just google it if you don't have it installed yet.
- The React code was initially generated with `create-react-script` as detailed in the official React tutorial. I then structured it manually according to best industry practices so feel free to just copy your structure off of mine.
- The server code is not linked to an actual database server. It's functionality is purely meant for demonstration of NodeJS basics and React server calls.

## Steps to Run Demo

1. `cd` inside `demo_server` and run `npm install` to install server.js dependencies
2. `cd` inside `demo` and `npm install` again to install frontend dependencies
3. Open a terminal window, run `npm start` inside the `demo` folder to run the React front-end
4. Open a separate terminal window, run `node server.js` in the `demo_server` directory to run the mock-up server code

## Important Points
Pay attention to:
- the structure of the code
- the `render` method in each component and how it uses the rest of the component's functions
- how the `fetch` method (from the `whatwg-fetch` package) calls the server. This is a good way of calling the server in your own interfaces for your projects and homework assignments.
