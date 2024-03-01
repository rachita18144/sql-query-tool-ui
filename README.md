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
7. Pagination
8. Export result to csv functionality
9. Integrated toast messages upon error/sucess
   
<img width="1439" alt="image" src="https://github.com/rachita18144/sql-query-tool-ui/assets/41795536/e1938086-ab51-4d8b-8709-d553e40d22ee">

#### Toast messgases & Pagination
<img width="734" alt="image" src="https://github.com/rachita18144/sql-query-tool-ui/assets/41795536/14582b3a-b331-4a89-8f66-fb54dc0993d8">

#### Error handling for wrong/empty query
<img width="718" alt="image" src="https://github.com/rachita18144/sql-query-tool-ui/assets/41795536/2c45e99a-ebb6-4af9-9a61-a75b7f2f7a2f">


#### Video walkthrough link: 

https://www.loom.com/share/f1b21211bb374adeb4332a5e1cc97cd0?sid=17aaac01-f48d-4bd5-a8c1-e76f2ae55076 

----


## Tech Stack
1. ReactJS
2. JS, HTML, CSS
3. mui (Material UI)
4. Create React App

Some other pointers:
- Have used mock data generated via `https://www.mockaroo.com/`.
- Simulated API call using Promises and delaying the response by a few seconds.
- Displayed a loader for this purpose.

## Performance
Measured Performance of the App through Lighthouse.

<img width="1000" alt="image" src="https://github.com/rachita18144/sql-query-tool-ui/assets/41795536/00c9d5fe-5eb4-4314-9048-224817ee6f1d">

The following approaches helped in performance optimisation:
1. I have made sure that the page load time is optimal so that users can interact seamlessly with the app.
2. Removed any unused styles and imports to reduce bundle size.
4. Memoised children components which are not supposed to be re-rendered whenever parent component is re-rendered.
5. Created small re-usable components where-ever possible.

Some other Performance Optimisation techniques which could have been used here but not required as of now:
- Once we integrate other features as well in the Application to make it Production ready, the build size would increase considerably. To manage this, we can use lazy loading i.e import components only when necessary (on demand loading).
- Advanced hooks like `useCallback` and `useMemo` could be used wherever necessary.
