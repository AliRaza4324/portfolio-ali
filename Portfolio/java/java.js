let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 2000);

const circles = document.querySelectorAll('.circle');
circles.forEach((elem) => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor((dots * marked) / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});

var mixer = mixitup('.portfolio-gallery'); // Assuming you have a .portfolio-gallery element

let menuli = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function activeMenu() {
    let len = sections.length;
    while (--len && window.scrollY + 97 < sections[len].offsetTop) { }
    menuli.forEach((sec) => sec.classList.remove("active"));
    menuli[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
};


// email send code 
const form= document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const mess = document.getElementById('messege');
function sendEmail(){
    const bodyMessege =  `fullName:${fullName.value}<br> Email:${email.value}<br> Phone Number:${phone.value}<br>  Messege:${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "alirazavn6757@gmail.com",
        Password : "5AA692C1C9CF127B46C7A432799D20C2CBD9",
        To : 'alirazavn6757@gmail.com',
        From : "alirazavn6757@gmail.com",
        Subject : subject.value,
        Body : bodyMessege
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message send successfully!",
                icon: "success"
              });
        }
      }
    );
}
form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    sendEmail();
})