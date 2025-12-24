let body = document.querySelector('body');
let nav = document.querySelector('ul');
let bars = document.querySelector('.fa-bars');

let navBar = false;
bars.addEventListener('click',()=>{
    if(navBar==false){
        nav.classList.remove('hide');
        navBar = true;
    }
    else{
        nav.classList.add('hide');
        navBar = false;
    }
});

window.onclick = (e)=>{
    if(e.target !== bars){
        if(navBar = true){
        nav.classList.add('hide');
        navBar = false;
        }
    }
}

let theme = document.querySelector('.theme');
let themeMode = false;
let header = document.querySelector('header');
let li = document.querySelectorAll('li');
let a = document.querySelectorAll('a');
let articles = document.querySelectorAll('article');
let wish = document.querySelector('.wish');
let button = document.querySelectorAll('button');
let img1 = document.querySelector('.img1');
let h1 = document.querySelector('h1');
let p2btn = document.querySelectorAll('#p2btn');
let box1 = document.querySelectorAll('.box1');
let plus = document.querySelector('.plus');
let form = document.querySelector('form');
let input = document.querySelectorAll('.input');
theme.addEventListener('click',()=>{
    if(themeMode==false){
        body.style.backgroundColor = "white";
        body.style.color = "black";
        header.style.backgroundColor = "white";
        header.style.borderBottom = "1px solid lightgray";
        li.forEach((item)=>{
            item.style.border = "0.1px solid rgba(60, 60, 60, 0.1)";
            item.style.backgroundColor = "rgba(179, 179, 179, 0.1)";
            item.addEventListener('mouseover',()=>{
                item.style.backgroundColor = "rgba(211, 211, 211, 0.5)";
            });
            item.addEventListener('mouseout',()=>{
                item.style.backgroundColor = "rgba(179, 179, 179, 0.1)";
            }); 
        });
        a.forEach((link)=>{
            link.style.color = "black";
        });
        articles.forEach((article)=>{
            article.style.borderBottom = "1px solid lightgray";
        });
        wish.style.color = "#00b4d8";
        button.forEach((btn)=>{
            btn.style.background = "linear-gradient(to right,#46cb18, rgb(60, 60, 60))";
            btn.style.color = "white";
        });
        resumebtn.style.background = "linear-gradient(to right,#0096c7, rgb(60, 60, 60))";
        img1.style.boxShadow = "#00b4d8 0px 0px 20px 5px";
        img1.addEventListener('mouseout',()=>{
            img1.style.boxShadow = "#00b4d8 0px 0px 20px 5px";
        });
        img1.addEventListener('mouseover',()=>{
            img1.style.boxShadow = "#46cb18 0px 0px 20px 5px";
        });
        h1.style.color = "#00b4d8";
        p2btn.forEach((btn)=>{
            btn.style.background = "black";
        });
        box1.forEach((box)=>{
            box.addEventListener('mouseover',()=>{
                box.style.boxShadow = "lightgray 0px 0px 10px 2px";
            });
            box.addEventListener('mouseout',()=>{
                box.style.boxShadow = "";
            });
        });
        plus.style.backgroundColor = "rgba(179, 179, 179, 0.2)";
        form.style.border = "1px solid rgba(179, 179, 179, 0.1)";
        form.style.backgroundColor = "rgba(179, 179, 179, 0.1)";
        input.forEach((inp)=>{
            inp.style.border = "1px solid rgba(179, 179, 179, 0.1)";
            inp.style.backgroundColor = "rgba(179, 179, 179, 0.1)";
            inp.style.color = "black";
        });
        submit.style.border = "1px solid rgba(179, 179, 179, 0.1)";
        theme.classList.remove('fa-sun');
        theme.classList.add('fa-moon');
        themeMode = true;
    }
    else{
        body.style.backgroundColor = "black";
        body.style.color = "white";
        header.style.backgroundColor = "black";
        header.style.borderBottom = "1px solid rgb(26, 26, 26)";
        li.forEach((item)=>{
            item.style.border = "0.1px solid rgba(255, 255, 255, 0.1)";
            item.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            item.addEventListener('mouseover',()=>{
                item.style.backgroundColor = "rgba(211, 211, 211, 0.5)";
            });
            item.addEventListener('mouseout',()=>{
                item.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            }); 
        });
        a.forEach((link)=>{
            link.style.color = "white";
        });
        articles.forEach((article)=>{
            article.style.borderBottom = "1px solid rgb(26, 26, 26)";
        });
        wish.style.color = "#46cb18";
        button.forEach((btn)=>{
            btn.style.background = "linear-gradient(to right,#46cb18, rgb(226, 255, 224))";
            btn.style.color = "black";
        });
        resumebtn.style.background = "linear-gradient(to right,#0096c7, rgb(226, 255, 224))";
        img1.style.boxShadow = "#46cb18 0px 0px 20px 5px";
        img1.addEventListener('mouseout',()=>{
            img1.style.boxShadow = "#46cb18 0px 0px 20px 5px";
        });
        img1.addEventListener('mouseover',()=>{
            img1.style.boxShadow = "#00b4d8 0px 0px 20px 5px";
        });
        h1.style.color = "#46cb18";
        p2btn.forEach((btn)=>{
            btn.style.background = "white";
        });
        box1.forEach((box)=>{
            box.addEventListener('mouseover',()=>{
                box.style.boxShadow = "white 0px 0px 10px 2px";
            });
            box.addEventListener('mouseout',()=>{
                box.style.boxShadow = "";
            });
        });
        plus.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        form.style.border = "1px solid rgba(255, 255, 255, 0.1)";
        form.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        input.forEach((inp)=>{
            inp.style.border = "1px solid rgba(255, 255, 255, 0.1)";
            inp.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            inp.style.color = "white";
        });
        submit.style.border = "1px solid rgba(255, 255, 255, 0.1)";
        theme.classList.remove('fa-moon');
        theme.classList.add('fa-sun');
        themeMode = false;
    }
});

let projectbtn = document.querySelectorAll('.projectbtn');
projectbtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
    let projects = document.querySelector('#projects');
    if (projects) {
        projects.scrollIntoView({ behavior: 'smooth' });
    }
    });
});

let resumebtn = document.querySelector('.resume');
resumebtn.addEventListener('click',()=>{
    window.open("https://drive.google.com/file/d/1wU2rD8DZeYogdGWkxzrbR_J5L3Ink_T-/view?usp=sharing",'_blank');
});

let img_cont = document.querySelectorAll(".img-container");
let dots = document.querySelectorAll(".dot");
let article4 = document.querySelector(".article4");
let viewProject = document.querySelector(".viewbtn");
let slideIndex = 0;
showslides();

function showslides(){
    img_cont.forEach((img)=>{
        img.style.display = "none";
    });
    slideIndex++;
    if (slideIndex > img_cont.length) {slideIndex = 1}    
    img_cont[slideIndex-1].style.display = "block";
    dots.forEach((dot)=>{
        dot.classList.remove("active");
    });
    dots[slideIndex-1].classList.add("active");
    for(let i=0;i<img_cont.length;i++){
        article4.classList.remove(`bgc${i}`);
    }
    article4.classList.add(`bgc${slideIndex-1}`);
    viewProject.addEventListener("click",()=>{
        switch(slideIndex){
            case 1:
                window.open("https://github.com/mohanmanojkarri/Rock-Paper-Scissors","_blank");
                break;
            case 2:
                window.open("https://github.com/mohanmanojkarri/Tic-Tac-Toe","_blank");
                break;
            case 3:
                window.open("https://github.com/mohanmanojkarri/Currency_Converter","_blank");
                break;
            case 4:
                window.open("https://github.com/mohanmanojkarri/Little-Lemon","_blank");
                break;
            case 5:
                window.open("https://github.com/mohanmanojkarri/Calculator","_blank");
                break;
            default:
                window.open("https://github.com/mohanmanojkarri/Rock-Paper-Scissors","_blank");
                break;
        }
    });
    setTimeout(showslides, 3000);
}

let Name = document.querySelector('#name');
let Email = document.querySelector('#email');
let Message = document.querySelector('#message');
function sendMail(){
    let params = {
        name: Name.value,
        email: Email.value,
        message: Message.value,
    }
    emailjs.send("service_ftmdn3h","template_srw1h3g",params).then(alert("Email sent successfully!!"));
}

let submit = document.querySelector(".submit");
submit.addEventListener('click',()=>{
    event.preventDefault();
    if(Name.value === "" || Email.value === "" || Message.value === ""){
        alert("please fill all the fields!");
        Name.style.borderColor = "red";
        Email.style.borderColor = "red";
        Message.style.borderColor = "red";
    }
    else{
        sendMail();
        Name.value = "";
        Email.value = "";
        Message.value = "";
        submit.disabled = true;
        setTimeout(() => {
            submit.disabled = false;
            submit.value = "submit";
            submit.style.backgroundColor = "rgb(59, 59, 59)";
        }, 5000);
        submit.value = "sent";
        submit.style.backgroundColor = "green";
    }
});