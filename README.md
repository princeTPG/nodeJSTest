# Node-Js mid-assessment
Node Js Mid-Assessment

## Questions :- 
 1. Write a function which returns a provided number asynchronously in at least 500ms  and then call this function for each value of this array [1, 2, 3, 4, 5] and console.log the value.
 2. Create a http server running on port 8080 in NodeJs. The server should return "Hello World" from the html document.
 3. Create a server running on port 4000 using express framework in nodejs and use 'ejs' templating engine. The server should return "Hello World" from the template.
 4. Create a rest API running on port 4000 using express framework in NodeJs which fetches data from the following api "https://jsonplaceholder.typicode.com/todos" and has following two endpoints
    - GET /todos : returns all the data from the API
    - GET /todos/:id : returns todo for the specified id in route params
 5. Create a rest API running on port 4000 using express framework in NodeJs and run it on a cluster for each CPU.
    - API should have following endpoint
    - GET / : returns the following message - "Hello from Worker <id>" and should log the following message in the console on the server - "Worker <id> running!"
    - Note: "id" is the cluster worker id.

## How to Run
```
cd Q<question-number>
yarn start
```

