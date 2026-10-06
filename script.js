function createComponent(){
const title=document.getElementById('title').value
const desc=document.getElementById('description').value
if(title===""|| desc===""){
    alert("please enter title and page content")
    return;
}
//createComponent
const component=document.createElement("div");
component.classList.add("component")
//add context
component.innerHTML=`<h2> ${title} </h2>
                       <p> ${desc} </P`
//add component
document.getElementById('container').appendChild(component)
}