# React Learning Notes 

## To get parcel and Get React
- npm init
- npm install -d parcel . -d ka mtlb hai dev dependencies chaiye
- npm install react
- npm install react-dom


## Parcel
- Dev Build
- local Host
- HMR =Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimisation
- Minification
- Bundling 
- Compressing
- Consistent Hashing
- Code Splitting
- DIffrential Bundling -support older browsers
- Error handling
- HTTPS
- Tree Shaking - remove unused code
- Diffrent dev and prod bundles
    1. to create dev files we removed main from package 
    ![Notes](./Notes/Screenshot%202024-02-28%20205017.png)

## Browser List
[It will tell you about the values to add in package.json .it is added as a key pair ](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)


# Lecture 3

-we can use script command for npm shotcuts for example
```javascript
"scripts": {
    "test": "jest",
    "start" : "parcel  index.html"  
  },
```
-now we can just write npm run start .There is also a shortcut only for start we can write npm start.

-JSX code mai notes hai 

-react components

# Lecture 4

- css in js

### props in js
  -they are using function arguments type 

### Config-driven UI
  - acoding to diffrent data from backend you can show different ui
  - for example swiggy will have diffrent coupens aur corousals (which show offers) based on the data they get from server in diffrent cities

## Data from swiggy(key is imp)
  -map 
    -key : maanlo bohot saara data hai agar key nahi hogi toh har baar react uss data ko render karega 100 baar hai toh 100 baar render karega isliye apan key de dete hai jab bhi koi naya data aaya toh woh apni key ke hisab se arrange ho jaaye
    -also never use array index as your keys
    [reason by react.org](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)

## React Fragment(Assignment)
  -React Fragments are a component in React that allows you to group a list of children without adding extra nodes to the DOM. This can be useful when rendering multiple child elements/components in a single parent component.
  ```javascript
    function Parent() {
      return (
        <>
          <Child1 />
          <Child2 />
        </>
      );
    }
  ```

## Virtual DOM
- The VDOM is a programming concept that keeps a virtual representation of a user interface (UI) in memory. It's a tree that represents the structure and content of a website
- html ka tree type structure banake rakhna 

## React Reconciliation
- React reconciliation is the process of comparing the current state of the UI (virtual DOM) with the desired state (new virtual DOM) and figuring out the most efficient way to update the real DOM to match the desired state. This process is what makes React so fast and efficient, as it avoids unnecessary DOM updates.

## React Fiber
- React Fiber works by breaking down the rendering process into smaller chunks, called fibers. Fibers are units of work that can be scheduled and executed independently. This allows React to prioritize and render the most important parts of the UI first, while keeping the rest of the UI responsive.

## React without JSX
[Reason](https://legacy.reactjs.org/docs/react-without-jsx.html)


# Lecture 5

- Two Type of Export / Import

  1. Default export/import
    ```javascript
    export default Component_name
    import  Component_name from 'module'
    ```

  2. Named Export Import
    ```javascript
    export const component_name
    import {component_name} from 'module'
    ```

- Adding Event to Console

## React Hooks
  - Adding event to ui 
  - using super powerful element
    - body ke andar state variable likha hai
    time stamp: -55 minuter
- Normal Js Function 
  1. useState() - Superpowerful State Variable in React  (whenever a state variable updates react re renders  the component)
    - when it is called or changed either it is const the whole header or body function render again in a split of second 
    - this is the reason why we can write const as a state variable even when it is changing
  2. useEffect() next lecture

  ### React Reconciliation (diff algorithm) algorithm
      - it comapres the virtual dom with the new dom created and do the nessary changes 
      - introduced in react 16
      [Link for whole article about it](https://github.com/acdlite/react-fiber-architecture)

# Lecture 6

## Monolith and Microservices Architecture
  1. Monolith
      - in this every system work(API , UI, Authentication) inside a same project , also need to use same language for full backend and frontend 
        ![Notes](./Notes/Screenshot%202024-03-04%20234833.png)
  2.  Microservice 
      - Here everythiing has its own environment like backend can be on any langauge
      - and further they all can be connected to each other using API calls
        ![Notes](./Notes/Screenshot%202024-03-05%20001011.png)

## Two ways to approach api connection
  1. Load the website ==> call the Api (which takes approx 1 sec) ==> render The website 
      - here our website takes about 1 sec to fetch all api and start the website
  
  2. load the website ==> render site ==> call Api ==> render again
      - here we have our website but we are rendering twice which is not at all a headache because react is awesome at rendering ui we already saw that in previous lecture 

## use Effect
  - in body.js

  - when we were accessing data directly from swiggy website it gives a error it is CORS Policy
  ![Notes](./Notes/Screenshot%202024-03-05%20184158.png)


  [Video Of akshay on cors](https://www.youtube.com/watch?v=tcLW5d0KAYE)

  ### CORS (Cross Origin Resource Sharing)
    - our web browsers wont allow the sharing of data from one origin to another origin (Origin can be any other domain ,or any sub domain , or other ports ,or diffrent protocols)

  - After cors extension
  - we connected the swiggy api data with our app using fetch 
    - Learn optional chaining
  - we can also use corsproxy from
  []()

  -we can add a loading in place of our res data and now there is no use of mock data 
  - or in place of loading we can show ==Summering UI==
 
- Header pe useState ka use aur login logout button banaya 

- Search Button banya usme jo jo dikhat aayi code mai body.js mai fetch class ke andar 

# Lecture 6.1 

- whenever we get data from swiggy it give us limited data 
- there is a update json in network whenever we scroll 
- this update is having request method as post and not get so we use fetch post api using the link below 
  [to fetch a Post Api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)


# Lecture 7

## UseEffect and dependecy array
 - when there is no dependency array => every time header is render it will be called
 - when there is empty dependency array => it is called on initial render(just once)
 - when it is filled with a use state variable => it will render everytime useState variable is changed 

## UseState 
  - initials it inside our  function component i.e.  body or header etc
  - always keep it in starting of your code
  - never use it inside a scope for example (if or for loop)
 
## Routing
- install react router dom using "npm install react-router-dom"
- it will be in package dependencies
- now import two data 
```javascript
import { createBrowserRouter,RouterProvider } from "react-router-dom"
// aage ka code mai hai main.js mai
``` 

- iske baad about aur contact us banya 
- per agar hum /priyash likhenge toh ek error aa raha hai jisko apan manipulate kar sakte hai
  !(Error Before)[./Notes/Screenshot%202024-03-07%20011618.png]

- we import a hook useRouteError in our error.js to get the error

- Outlet - using something as a chilren of another tag 
  - as seen in code

- never use <a> tags in your jsx code because this will reload our page 
- instead of that you can use link which is a tag provided by react router dom this will not roload the page but only change the component of the page
- this is reach web apps are called Single Page Application (SPA)

### Two Types of routing
 - Client side Routing -  
 - Server Side Routing - it reloads the page because it fetch the data from server

## Creating Menu Page 
  - Firstly create a menu page 
  - adding this is path but it is added in diffrent because we need diffrent menu for diffrent restuarants
    - there is diffrent res menu for other restuarants so we use ":" in main.js

  - Now fetch the data and use it inside our menu
  - something known as graphql it helps us to get data easily which is inside a object
  - now similar fectching the data and return it in our ui

- Now to get diffrent Ui for diffrent restuarants we used there id which was taken from useparams from react-routing dom and this param is the resid which was given in main.js >chilren>path>restuarant/:resid