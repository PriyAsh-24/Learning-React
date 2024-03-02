import React from "react"
import ReactDOM from  'react-dom/client'

// const heading =React.createElement('h1',{ id:'heading' , xyz:'abc'},'Hello world from React')  //React.createElement(tag,attribute,child);
// // console.log(heading);

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// //Lets Create a Nested loop

// const nested =React.createElement('div',{id: 'parent'},
//     React.createElement('div',{id:'child'},
//     [React.createElement('h1',{},'Hey! its H1 did it change'),React.createElement('h2',{},'Hey its H2 did it changess here')]
// ))

// root.render(nested);


//React.createlement creates an object which while rendering converts to a html code
//* createElement => ReactElement(object) => render
const heading = React.createElement('h1',{id : "hello"},'Hello World');

//THis is a long code to write and is not easily undeerstood by other devlopers
//This is the place where jsx comes in \
//  * jSX = it is an extenstion to our reac code which made it easier to write 
//it is not html intoduced in js 



//* jsx => React.createElement => ReactElement(object) => render      (babel Transpiles this code)
const jsxHeading=<h1 id="hello">This is Hello World From jsx</h1>
//this line is not read by js compiler (ecma script 6) and so here parcel come in
//parcel converts this code which is readable using Babel

//console.log(heading);
//console.log(jsxHeading) //gives the same result  //i. e. is a object


const root=ReactDOM.createRoot(document.querySelector('#root'));

root.render(jsxHeading)



//for long jsx code we write

const jsxheading=(
<h1 className="hello">
    This is Hello World From jsx  with classname 
</h1>);



//* React Componets
// Class Based Component -old
// Functional Component -New 

//React FUnctional Component   --Always starts with capital letter

const HeadingComponent=() =>{
    return <h1 className="Heading">Hello World using Functional Component </h1>
}

const HeadingComponent2=() => (
    <div className="Constainer">
        <h1 className="Heading">Hello World using Functional Component </h1>
    </div>
);

//() isme return nahi likhna 
//{} isme return liknaa hai js chai with code mai padha tha

root.render(<HeadingComponent/>);


//* Component Composition

const ToInject=() => <h1 className="toinject">This is My heading</h1>

const MainHeading=() => (
    <div className="Container">
        <ToInject />                       
        {
        //  ^ this is done by basel
        }
        <h1>Hello Inside</h1>
    </div>
)

root.render(<MainHeading/>)

//we can also insert js inside html using {}

const number=100;

const InsertingJs=() => (
    <div className="Container">
        <h1>
        {
            //we can Insert Any js inside
            number +100
        }
        {console.log("jaa na")}
        </h1>
        <h1>Hello Inside</h1>
    </div>
)

root.render(<InsertingJs/>)

