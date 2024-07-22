let myLeads=[]

const inputEl=document.getElementById("input-el")
let ulEl=document.getElementById("ul-el")
const inputBtn=document.getElementById("input-btn")
console.log(ulEl)
inputBtn.addEventListener("click",function(){
    console.log("Button clicked from addEventListener")
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLead()

})

// let box=document.getElementById("box")
// box.addEventListener("click",function(){
//     console.log("I want to open the box")
// })
function renderLead(){
let listItems=""
for(let i=0;i<myLeads.length;i++)
{
    listItems+="<li><a hrf='"+myLeads[i] + "'>"+myLeads[i] + " "+"</a></li>"
    // const li=document.createElement("li")
    // li.textContent=myLeads[i]
    // ulEl=append(li)
}
ulEl.innerHTML=listItems
}

// const container=document.getElementById("container")
// container.innerHtml= "<button onclick='buy()'>Buy!</button>"

// function buy()
// {
//     container.innerHTML+="<p>Thank You</p>"
// }