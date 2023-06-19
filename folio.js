let menu = document.querySelector("#menu")
let navbar = document.querySelector(".navbar")
let header = document.querySelector('.header')
// menu.addEventListener('click', function () {
//     navbar.classList.toggle("active")
//     header.classList.toggle("active")
// })
menu.onclick=()=>{
    navbar.classList.toggle("active")
    header.classList.toggle("active")
}
///Scroll active

let section = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec =>{
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')
        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    
    //sticky navbar

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY>100)

    //remove for navbar click
    header.classList.remove('active')
    navbar.classList.remove('active')
}

// Text Changer


let text = document.querySelector(".txt")
// let cursor = document.querySelector(".cursor")
let set_text = ["Frontend-Developer","Graphic-Designer","UI/UX-Designer"]
// console.log(text,cursor)
var index = 0
var char_idx = 0
let time = 100
let next_time = 1000
function change(){
        if(char_idx <= set_text[index].length){
            text.textContent += set_text[index].charAt(char_idx);
            char_idx++;
            setTimeout(change,time);
        }
        else{
            setTimeout(erase, time);
        }
    }
const  erase=()=>{
    if(char_idx > 0){
        text.textContent = set_text[index].substring(0,char_idx -1);
        char_idx--;
        setTimeout(erase,time);
    }
    else{
        index++
        if(index>=set_text.length)
            index = 0;
        setTimeout(change,time+100);
    }
}
document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(change,next_time+150)
})


// let tabs = document.querySelectorAll(".tabs")
// tabs.forEach((tab,idx)=>{
//     tab.addEventListener("click",(e)=>{
//         tabs.forEach(tab=>{tab.classList.remove("active")})
//         tab.classList.add("active")
//     })
// })
// document.getElementById("default").click()

// About
// let about = document.getElementsByClassName("container")[0]
// let title = ["Hi, I`m Ankit. ","",""]
// let detail = ["",""]
// let explain = ["","",""]
// let n = "";
// for(let x in title){
//     n+=``
// }
// about.innerHTML = n
