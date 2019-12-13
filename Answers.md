# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is a javascript framework that allows for smoother performance. It does this by use of the Virtual DOM and not making the entire DOM update everytime only one element is changed. If only one component has new data, then only that component will need to re-render in React.

1. What does it mean to think in react?

Thinking in React is thinking about the structure of your app in terms of state and components. Where will state be stored? Which components have/need access to that state? Categorizing things into components so that they can be reused to keep code dry, and only giving state when necessary are examples of thinking in React.

1. Describe state.

State is a place to store dynamic data. If there is a piece of data that we expect will update depending on some interaction, it can be stored in state and passed around to the components that need them.

1. Describe props.

Props is an object containing the data we want to pass to child components. Child components will then receive the data and need to define it by either destructuring or using dot notation.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are blocks of code you can use in a useEffect to execute everytime the page re-renders, without further input. You can place in an empty array to cause this to happen upon initial page load and never again, or you can place in some state or prop into the array to indicate you would like the effect to run whenever that state or prop changes.
