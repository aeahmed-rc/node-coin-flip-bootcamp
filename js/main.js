let tail=document.querySelector('#Tail')
let head=document.querySelector('#Head')
let btn=document.querySelectorAll('button')
let headImage=document.querySelector('#headImage')
let section=document.querySelector('section')


let result=''



btn.forEach(el=>{
  el.addEventListener('click',()=>{
    let random=Math.floor(Math.random()*2)
    flip(random)
    let userChoice=event.target.id
  // animation()
    // console.log(userChoice)
    compare(result,userChoice)


  })
})
// function animation(){
//   let spin=document.getElementById("flipCoins")
//   console.log(spin)
//   spin.classList.add('coin')
//
// }

function flip(random){

  if(random===0){
    result="Head"
    let createTextNode=document.createTextNode(result)
    section.appendChild(createTextNode)
    console.log(result)

  }else if(random===1){
result='Tail'
let createTextNode=document.createTextNode(result)
section.appendChild(createTextNode)
console.log(result)


  }

  return result
}

function compare(result,userChoice){
  if(userChoice===result){
    let createTextNode=document.createTextNode('win')
    section.appendChild(createTextNode)
    section=""
    console.log('win')
  }else if(userChoice!==result){
    let createTextNode=document.createTextNode('lose')
    section.appendChild(createTextNode)
    section=""

  }
}
