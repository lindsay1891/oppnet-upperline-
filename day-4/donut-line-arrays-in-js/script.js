var donut_line = ["seim", "amori", "lindsay", "kim", "belissa" , "jouse"]

var line_div = document.querySelector('#donut_line')
var line_ol = document.querySelector('#donut_line_ol')

var eaten_list = document.querySelector('#eaten')
var push_button = document.querySelector('#push_btn')
var unshift_button = document.querySelector('#unshift_btn')
var pop_button = document.querySelector('#pop_btn')
var eat_donut_button = document.querySelector('#eat_donut')
var name_input = document.querySelector('#name_input')
// define a displayDonutLine function 
function displayDonutLine(){
    line_ol.innerHTML= ''
    donut_line.forEach( person => {
        line_ol.innerHTML += '<li>'+person+'</li>'
    })
}
// call the function 
displayDonutLine()


push_button.addEventListener ('click', event => {
    var person = name_input.value 
    donut_line.push(person)
    
    name_input.value =''
    displayDonutLine()
    
  donut_line.push(person)
  displayDonutLine()
})
eat_donut_button.addEventListener('click', event =>{
    var person = donut_line.shift()
    
    eaten.innerHTML += '<li>' +person+ '</li>'
    displayDonutLine.content()
})