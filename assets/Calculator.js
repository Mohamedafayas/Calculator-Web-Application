let input = document.querySelector("input")

function addValue(element){
    input.value += element
}

function clearval(){
    input.value = ""
}

function delCharacter(){
    input.value = input.value.slice(0,input.value.length-1);
}

function evaluatevalue(){
    input.value = eval(input.value)
}