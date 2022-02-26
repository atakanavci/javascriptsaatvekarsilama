let userName = prompt("Adınız nedir?")
let myName =  document.querySelector("#myName")
myName.innerHTML = `${userName}`


setInterval( ()=> {

    let date = new Date()
    let day = date.getDay()
    let hour = date.getHours()
    let minite = date.getMinutes()
    let second = date.getSeconds()

    let days = ["Pazar" , "Pazartesi" , "Salı" , "Çarşamba" , "Perşembe" , "Cuma", "Cumartesi"]

    let clock = document.querySelector('#clock')
    let text = document.querySelector('#text')

    hour = (hour < 10) ? "0" +hour : hour
    minite = (minite < 10) ? "0" +minite : minite
    second = (second < 10) ? "0" +second:second

    clock.innerHTML = `${hour}:${minite}:${second} ${days[day]}`
}, 1000);