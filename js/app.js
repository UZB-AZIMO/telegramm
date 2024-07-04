import {DATA} from "../server/db.js";
const form = document.querySelector(".form")
const input = document.querySelector(".form input")
const content = document.querySelector(".content")
const headerStatus = document.querySelector(".header__status")
const contentImage = document.querySelector(".content__image")

// Habar ketganda refresh bolmasligi
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let val = input.value
    if(val.trim() === "") return null

    // Habar yozganda stikerni yoqolishi
    contentImage.style.display = "none"
    
    // Vaqtni real vaqt bilan birhil korsatish
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()

    
    // Habarlar uchun yangi div yaratadi
    let div = document.createElement("div")
    div.className = "message my-message"
    div.innerHTML = `
    <p>${val}</p>
    <span>${hour}:${minute}</span>
    `
    // Habarni yuborgandan kegin yozilgan habarni tozalaydi
    content.appendChild(div)
    input.value = ""
    
    // Partnyorni chaqirish
    partnerSendMessage()
})

function partnerSendMessage(){
    // Partnyor yozishini kuttirish
    setTimeout(()=>{
        // Vaqtni real vaqt bilan birhil korsatish
        let date = new Date()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let result = [hour , minute].map(i=>i.toString().padStart(2, "0"))
        // DATA ni randomni xabar chiqarish
        let index = Math.floor(Math.random() * DATA.length)

        // Habarlar uchun yangi div yaratadi
        let div = document.createElement("div")
        div.className = "message"
        div.innerHTML = `
            <p>${DATA[index]}</p>
            <span>${hour}:${minute}</span>
        `
        // Habarni yuborgandan kegin yozilgan habarni tozalaydi
      content.appendChild(div)
    }, 1000)
}

