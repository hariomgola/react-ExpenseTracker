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
  - Handling Events
  - Update the UI and working with 'state'
  - A closer look at components & states

 # Checking or Reading data on button click
  - Now we have a native access to dom element of a button
  - check on google for 'html button elements'
  - To check events in react we have a event listner by using 'onClick'
  - Also use below code `<button onClick={()=>{console.console.log('clicked');}}>Change Title</button>`
  - We can also code function to execeuted when clicked `<button onClick={clickHandler}>Change Title</button>`.
  - Only need to call this function without giving circular brackets.
  - If we change clickHandler to clickHandler() then javaScript will execute this function when the button is parsed.

 # State in React
  - useState is the function in react library to use state in react.
  - useState is called as reactHook.
  - All hooks is called inside the react component function only.
  - hooks not be called inside the nested function
  - useState return a function with first value as its value itself, and second is the updated function.

 # useState
  - Its registered in the form of saperate states.
  - When ever the state change only particular component and only that specific instance where this component is used. 
  - React will re-eveluate it.

 # Listening to user inputs
  - For listening the user event's we can add the event listner to it.
  - we can get the things done by using onChange event.
  - useState hook to store the value when the component is refreshed or re-evaluated.

 # Using one state for many states
  - passing as object in useState to use multiple states

 # MultiState - approach
  setUserInputs({
      ...userInputs,
      enteredTitle: event.target.value,
    });
 # Multistate Function - approach (Most suitable)
  setUserInputs((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  
 # Adding two way binding
  - use Value in HTML tag and assign back to its value.

 # passing Data from parents to child component.
  - first define a function on parent.
  - then pass the parent function as a prop to child function
  - call the function which we are receiving as a prop
  - Passing argument in a parent function to get the data to parent (child  ->  Parent)

 # Lifting state-up
  - Lifting state up is termed as passing a data from child to parent component.

 # Controlled vs uncontrolled component's
  - uncontrolled component is termed as stateless component. 
  - Controlled component is termed aas statefull component.

 # Imp Notes
  - React hook is used to convert stateless component into statefull component.
  - When some data changes. React hook or usestate need to be used to refresh the particular component.

-----------------------------------------------------------------------------------------------------------------

 # React Modules
  - Before going to react module just check turnary statement and if single line statement
  - condition ? true : false  (if-else block)
  - condition && true   (if statement only)

 # Keys
  - Keys is the special concepts in react if we are rendering an array of list in ui.
  - Without providing the keys if we go to chrome inspect tab we can see that after every update element refreshes.
  - With unique key added to rendered element now react can easily add element without refreshing other element.

 # Rendering Conditional Items
  - We can use conditional if statement in our JSX code.
  - condition ? true : false
  - Also use below tricky opertor
  - condition && true - Here && will end the opertaor by checing only if condition
  - With the help of && operator we can spilt the single ternary operator into if else saperation code.
  - In React Also we can store JSX content directly to any variable

 # Returning Conditional Statement
  - We can also return jsx code from component by using the conditional returned statement.

 # Styling component
  - We can also style on dynamic basis using {{}} operator

-----------------------------------------------------------------------------------------------------------------

 # Styling React component
  - Conditional and Dynamic styles.
  - Styled components (most popular library) (Important)
  - Css modules

 # Conditional style (Inline css)
  - Use with state management
  - style = {{color:!isValid ? 'red' : 'black'}}

 # Conditional style (Dynaic css by changing styles)
  - use by changing the class name in file.
  - className = {`form-control ${!isvalid ? 'invalid': ''}`}

 # Styled components (https://styled-components.com/)
  - for using style component library we need to install it.
  - npm install --save styled-components
  - const Button = styled.button``  (Important)
  - we can direct use css inside ``
  - for sudo selector use &: symbol (Important)
  - The button which we return in component by default applies all the props you might be passing to own button component.

 # Using media Query inside the styled component
  - @media (min-width: 768){
    // directly write the css inside this within styled component
  }

 # CSS module
  - CSS module help in scoping the styles so that it cannot go outside and scope.
  - change simple .css file to `.module.css`
  - import styles from './button.module.css'
  - change class name to that - className = {style.button}

 # CSS module (Dynamic modules)
  - Use if condition in classname
  - `${styles['form-control'] ${!isValid && styles.invalid}}`

-----------------------------------------------------------------------------------------------------------------

 # Debugging React Application
  - Debug react app
  - finding and fixing error

 # Understanding React Error.
  - Always use the jsx encloused in one element.

 # Debugging react
  - check on chrome source tab for debugging

 # Working with break point.
  - Pause Script Execution - (f8)
  - Step over - (f10)
  - Step in function - (f11)
  - Step out from function - (shift + f11)
  - Step (f9)
  - deactivate break point - (ctrl +f8)

 # Using React developer tool
  - Install React developer Tools from chrome web store
  - check on component on chrome developer tool.





































 */
