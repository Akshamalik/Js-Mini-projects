//document.getElementById("count-el").innerText=5

// let firstBatch=5
// let secondBatch=7
// console.log(count)

// let myAge=21
// console.log(myAge)
//doucument object model--DOM
let count=0
let countEl=document.getElementById("count-el")
let saveEL=document.getElementById("save-el")



function increment(){
    // console.log("button clicked")
    count+=1
    countEl.textContent=count
}
function save(){
    // console.log(count)
    let countstr=count+"-"
    saveEL.textContent+=countstr
    count.textContent=0
    count=0
}
// let errorpara=document.getElementById("error-el")
// console.log(errorpara)
// function purchase()
// {
//     console.log("button clicked")
//     errorpara.textContent="Something went Wrong"
// }

