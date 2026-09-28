/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const length = document.querySelector(".length")
const volume = document.querySelector(".volume")
const mass = document.querySelector(".mass")

length.textContent = `0 meters = 0.000 feet | 0 feet = 0.000 meters`

volume.textContent = `0 liters = 0.000 gallons | 0 gallons = 0.000 liters`

mass.textContent = `0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos`

function conversion(){
    let inputValue = input.value

    let feetValue = inputValue * 3.281
    let meterValue = inputValue / 3.281

    let gallonValue = inputValue / 3.785
    let literValue = inputValue * 3.785

    let poundValue = inputValue * 2.204
    let kiloValue = inputValue / 2.204

    length.textContent = `${inputValue} meters = ${Number(feetValue).toFixed(3)} feet | ${inputValue} feet = ${Number(meterValue).toFixed(3)} meters`

    volume.textContent = `${inputValue} liters = ${Number(gallonValue).toFixed(3)} gallons | ${inputValue} gallons = ${Number(literValue).toFixed(3)} liters`

    mass.textContent = `${inputValue} kilos = ${Number(poundValue).toFixed(3)} pounds | ${inputValue} pounds = ${Number(kiloValue).toFixed(3)} kilos`
}


btn.addEventListener("click", function(){
    
    if(input.value == ""){

    }else{
        conversion()
    }
    
})