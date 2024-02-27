# Atlan Frontend Engineering Task - SQL Web-based Query Tool

## Problem Statement
Create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.

## Approach
Created a web Application with the following features:
1. Ability to select a Query from the list.
2. Ability to have a look at the existing tables in the db.
3. Ability to write a custom Query.
4. Run Query button fetches the query results.
5. Error handling when wrong or empty Query is entered.
6. Clear query and results functionality
7. Export result to csv functionality
   
<img width="1439" alt="image" src="https://github.com/rachita18144/sql-query-tool-ui/assets/41795536/e1938086-ab51-4d8b-8709-d553e40d22ee">


## Tech Stack
1. ReactJS
2. JS, HTML, CSS
3. mui (Material UI)

Some other pointers:
- Have used mock data generated via `https://www.mockaroo.com/`.
- Simulated API call using Promises and delaying the response by a few seconds.
- Displayed a loader for this purpose.
