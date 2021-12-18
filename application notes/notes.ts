/**
 # React Components
  - React is JavaScript library to building user interfaces
  - react and react-dom both library combine to make a working react
  - All userinterfaces in react are made up of component.

 # Component
  - Reusability(Don't repeat yourself)  and  separation of concerns(helps in small and managable code)
  - Split big chrunks of code into multiple smaller functions.

 # Component Build
  - HTML    CSS     JavaScript
  - React allows you to create re-usable and reactive components consisting of HTML and JavaScript (and css)
  - React uses a declarative approach.
  - Define the desired target state and let react figure out the actual javascript DOM instructions.
----------------------------------------------------------------------------------------------------------------
 # Creating a react project
  - npx create-react-app 'project_name'
  - cd 'project_name'
  - npm start

 # index.html (public)
   - This is the only file which is rendered in the browser
   - On this single file we import the finished react application in this file.

 # JSX (JavaScript XML)
   - JavaScript code in XML(HTML)
   - check main.chrunk.js in src folder and check how app function is modified.

-----------------------------------------------------------------------------------------------------------------
 # Creating components
   - Its a good practise to add new component under new source directory folder.
   - App.js is also a component but its a predefine as well as root component.
   - We create user define component's in component's folder.

                                              <App/>
                                                |
                             |                             |
                        <Header/>                       <Task/>
                                                  |        |        |
                                              <Task/>    <Task/>   <Task/>
  - We are not going to import any of component in index.js.
  - we are going to import our custom created component inside the app.js
  - Since app.js is the root component for the app
  - One component has only one root html all other html are nested inside this.

 # Styling the created component
  - While styling we can directly import the css file in our component file.
  - One important point we need to use className instead to class since class is reserved keyword in javaScript

 # Using Custom data
  - We can use custome data with the help of {}.
  - Just pass the varaible which is storing the data it automatically renders the data in UI.
  - We can also pass the custom data using props.

 # props
  - props simply stand for properties.
  - we can set our own property to custome components.
  - props is noting but the inputs passing in the form of objects.

 # Concept of Composition
  - Diving big component into small component with right functionlaity is termed as composition.
  - Wrapper component's only works with nested html code.
  - But it can't work if any other component is nested inside that.

 # wrapper function in React
  - Learn how wrapper function changes we have use the same in card component
  - Learn concept of props.children and how it assigned.
  - Learn concept of changing the children class css from wrapper class.
  
-----------------------------------------------------------------------------------------------------------------
 # User Interaction & States























































 */
