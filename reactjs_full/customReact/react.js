
function customRender(reactElement, mainContainer){
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    // domElement.setAttribute("href", reactElement.props.href)
    // domElement.setAttribute("target", reactElement.props.target)

    // recommand use this method
    for(let prop in reactElement.props){
        if(prop==="children") continue;
        console.log(prop)
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}


const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },

    children:"Click me to visit the goole"

}


const mainContainer=document.getElementById("root")

customRender(reactElement, mainContainer)