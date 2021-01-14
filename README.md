# Todos

Create a todo list and filter it by todo completion status.

[View on Netlify](https://dcwds-todo.netlify.app)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8d2579e2-04df-4f2e-9d5a-c3b132785eaa/deploy-status)](https://app.netlify.com/sites/dcwds-todo/deploys)

## Technology

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- State management with [Redux](https://github.com/reduxjs/redux) and [Redux Toolkit](https://github.com/reduxjs/redux-toolkit).
- Styles with [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss).

## Motivations

There are a few goals I had with this project that have very little to do with project scope and much to do with implementation.

### Testing

This is the first project where I have written meaningful tests. I experienced growing pains while learning the fundamentals of React Testing Library in addition to testing rendered components that are provided a mock Redux store. In a couple instances, I found myself questioning some of my implementations of functionality based on how difficult they were to test. This was insightful and something I would not have encountered had I not tested my code.

### Styling

There are many styling strategies I've played with over the years and I'm happy to have found Tailwind and was able to explore it within this project. I enjoy the explicit nature of the framework, which removes the tendency to make abstractions early. I am also incredibly pleased with the boilerplate configurations and how little effort is required to tweak the configurations toward your aesthetic. I expect to use Tailwind in future projects.

### State

Some might consider it silly to introduce Redux in a project with this narrow of a scope. Why not the React Context API? Well, I just wanted an excuse to familiarize myself with Redux Toolkit more. I encountered a challenge in which I had tried to use the `prepare` callback within the `addTodo` action creator, where I was assigning and incrementing a dynamic ID through a `nextTodoId` variable. However this made the function impure and was difficult to test. I considered dependency injection but ended up changing the implementation to resolve the `nextTodoId` based on the `todosSlice` state value.
