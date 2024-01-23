let buttons = document.querySelectorAll(".button")
let screenR = ''
let input = document.getElementById("result")
let equal = document.getElementById("equal")
let clear = document.getElementById("clear")
let back = document.getElementById("backspace")

buttons.forEach(element =>{
    element.addEventListener('click', ()=>{
    screenR += element.value
    input.value = screenR
    })
})

equal.addEventListener('click', ()=>{
	try{
        input.value = eval(input.value)
    }
    catch{
        input.value = "Error: Invalid calculation provided"
    }
})

back.addEventListener('click', ()=>{
    val = input.value.toString()
    char = val.length 
    input.value = input.value.replace(val[char-1], '')
    screenR = input.value
})

clear.addEventListener('click', ()=>{
	screenR = ""
	input.value = ""
}) 

console.log("The calculator is running now.")
