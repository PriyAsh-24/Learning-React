const heading =React.createElement('h1',{ id:'heading' , xyz:'abc'},'Hello world from React')  //React.createElement(tag,attribute,child);
// console.log(heading);

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//Lets Create a Nested loop

const nested =React.createElement('div',{id: 'parent'},
    React.createElement('div',{id:'child'},
    [React.createElement('h1',{},'Hey! its H1'),React.createElement('h2',{},'Hey its H2')]
))

root.render(nested);

