import './style.css'
import AOS from "aos";
import "aos/dist/aos.css"; 

AOS.init({
  duration: 1000, // values from 0 to 3000, with step 50ms
});

document.addEventListener("DOMContentLoaded", ()=>{

$$("img").forEach((e) => {
  e.setAttribute("onContextMenu", "return false;");
  e.setAttribute("onerror", "this.src='images/not_found.svg'");

  //e.setAttribute("loading","lazy");
});

$$("a").forEach((e) => {
  e.setAttribute("onContextMenu", "return false;");

  e.setAttribute("target", "_blank");
});

$$(`input`).forEach((e) => {
  e.setAttribute("autocomplete", "off");
});

document.addEventListener("contextmenu", (e) => e.preventDefault());


//document.querySelector("#about").innerHTML = ``;

 //document.querySelector("#skills").innerHTML = ``;     
})

function $(element) {
  return document.querySelector(element);
}

function $$(element) {
  return document.querySelectorAll(element);
}

function hidden(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}


const emailUs = $("#emailUs");
const cancel = $("#cancel");
emailUs.addEventListener("click", () => {
  show($("#contact"));
  document.body.classList.add("overflow-hidden");
});
cancel.addEventListener("click", () => {
  hidden($("#contact"));
  document.body.classList.remove("overflow-hidden");
});


const hero = $("#hero");
const about = $("#about");
const skills = $("#skills");
const projects = $("#projects");

const pagesList = [hero, about, skills, projects];

const heroNav = $("#heroNav");
const aboutNav = $("#aboutNav");
const skillsNav = $("#skillsNav");
const projectsNav = $("#projectsNav");

const scrollOptions = {
  behavior: "smooth",
  block: "start",
};

const removeClass = () => {

$$("#navigation li").forEach((list)=>{

    list.classList.remove("bg-gradient-to-l");
    list.classList.remove("from-indigo-600");
    list.classList.remove("to-purple-700");
    list.classList.remove("rounded-full");
})
};
$$("#navigation li").forEach((li) => {

  li.addEventListener("click", (ev) => {
  removeClass();
  
    ev.currentTarget.classList.add("bg-gradient-to-l");
    ev.currentTarget.classList.add("from-indigo-600");
    ev.currentTarget.classList.add("to-purple-700");
    ev.currentTarget.classList.add("rounded-full");

    let pageToGoTo = ev.currentTarget.id.replace("Nav","");
    //console.log(pageToGoTo);
    $(`#${pageToGoTo}`).scrollIntoView(scrollOptions);

  });
});

pagesList.forEach((page) => {

page.addEventListener("mouseover", (ev) => {
  let navToActivate = `${ev.currentTarget.id}Nav`;
  //console.log(navToActivate);

  removeClass();
  let activeNav = $(`#${navToActivate}`);
  activeNav.classList.add("bg-gradient-to-l");
  activeNav.classList.add("from-indigo-600");
  activeNav.classList.add("to-purple-700");
  activeNav.classList.add("rounded-full");
}); 

});


$("#form").addEventListener("submit", (e) => {

e.preventDefault();

})


$("#openAbout").addEventListener("click",()=>{
  aboutNav.click();
});

$("#share").addEventListener("click",function(){

  if (navigator.share) {
    // Share data when a button is clicked
    this.addEventListener("click", async () => {
      try {
        // Share text, title, and URL
        await navigator.share({
          title: "Dumisa's Portfolio",
          text: "Link to Dumisa's Portfolio",
          url: "https://dumisa-sakhile.netlify.app/",
        });
        console.log("Data was shared successfully");
      } catch (err) {
        console.error("Error:", err.message);
      }
    });
  } 

});


// Greeting
const greeting = $("#greeting");

const greetLanguage = $("#greetLanguage");

const loadGreeting = async ()=>{
  
const res = await fetch("/greetings.json")

const greetings = await res.json()

setInterval(() => {

let round = Math.random();
 
let random = Math.round(round * (greetings.length - 1));

greeting.textContent = `${greetings[random].greeting}`;
 
greetLanguage.textContent = `   ${greetings[random].language}    `;

   },4000)}
   
loadGreeting();
// Greeting end

//typing animation

 let txtSize = 0;

const txtArray = [
  `I welcome you to my portfolio. I'm Dumisa Sakhile, a NodeJs and Express developer`,

  `Thanks for visiting my site!`,

  `Feel free to contact me if you have any questions.`,

  `Check out my projects page to see some of my work.`,

  `I have experience with HTML, CSS, JavaScript, TailwindCSS, NodeJs & Express, MongoDB, Supabase and Firebase.`,

  `I'm a self-taught developer with a passion for creating web applications that solve real-world problems. I'm always learning and exploring new technologies, and I love collaborating with others to build great things.`,

  `When it comes to creating projects, I like working with APIs (application programming interfaces) and using virtual DOMs (document object models).`,

  `I don't do web design, but I like appealing user interfaces. In all my developments, I try to follow the principles of UI/UX.`,

  `I like to create web apps that resemble native applications.`,

  `The structure of my websites is inspired by native apps. `,

  `Instead of dull and static websites, I am a huge fan of dynamic webs.`,

  `I like data-driven applications; hence, almost all of my projects involve APIs.`,

  `I like modern web applications. `,

  `I like making most of my projects into Progressive Web Applications (PWA).`,

  `I am familiar with Object-oriented programming in JavaScript.`,
  
  `I know the basic of ReactJS`
];
 
 let speed = 100;
 
 let currentTxt = 0;
 
 function typeWriter() {
   if (txtSize < txtArray[currentTxt].length) {
     $("#type").innerHTML += txtArray[currentTxt].charAt(txtSize);
     txtSize++;
     setTimeout(typeWriter, speed);
   } else {
     // switch to next string in array
     currentTxt = (currentTxt + 1) % txtArray.length;
     txtSize = 0;
     // clear previous text
     document.getElementById("type").innerHTML = "";
     // start typing new text
     setTimeout(typeWriter, speed);
   }
 }
 
 typeWriter();
//typing animation
 


const year = $$(".year");
year.forEach(yr=>{
  yr.textContent = new Date().getFullYear();	
})

const schoolYear = $$(".schoolYear");
schoolYear.forEach((yr) => {
  yr.textContent = new Date().getFullYear() - 2023 + 1;
});

$("#logo").addEventListener("click",()=>{
   window.scrollTo({ top: 0, behavior: "smooth" });
})