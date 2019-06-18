This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technology Choices

React was chosen as it is the most popular web-development javascript framework, and as it is my primary tool in my professional work today. It also happens to be the best framework and allows a quick pace.

I decided to implement the solution using stateless components and hooks as it is the most modern way and towards the direction the react team seems to be taking (released in version 16.8.0). It also allows for very elegant and clean code and eliminates the need to manage component lifecycle. It demonstrates how I currently (as of 2019) prefer to write react code.

I did not make use of a 3rd party state management library, but I did implement state management via hooks in a similar fashion to redux; using actions and reducers to update store and in turn triggering UI updates. I relied on the redux pattern as it is the most popular solution for state management, and is highly scalable. For an app this size it is not really needed, but I wanted to demonstrate a redux dataflow.

For styling I opted to use the MaterialUI withStyles solution, which allows for styling components in javascript code. This way everything becomes javascript, no need for separate CSS files or any hacky mixes of javascript, html and css. I have not tested this approach at a larger scale, and are unsure of how it would work together with more high-level theming, but I find it to be a remarkably quick way of handling CSS-ing in these smaller projects. We have used this method successfully at my current job in smaller web-services, for example application flows. I recon it's a promising way forward.
