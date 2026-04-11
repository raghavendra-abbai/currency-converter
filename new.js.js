let content=React.createElement(
    "h2",{
        style:{color:"red"}
    },
    "this is demo code"
);

let para12=React.createElement(
    "p",{
        id:"para1"
    },
    "this is an parafgraph"
)
let wrapper=React.createElement(
    "div",{
        id:"wrapper id"
    },[content,para12]
)


let display=document.getElementById("root");

let root=ReactDOM.createRoot(display);
root.render(wrapper);


 