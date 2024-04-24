import './style.css'

document.addEventListener("DOMContentLoaded", ()=>{
document.querySelector("#about").innerHTML = `<article
        class="bg-gray-800 min-w-[300px] max-w-[500px] py-4 px-4 rounded-lg shadow flex flex-col gap-4 items-center justify-center">
        <h1 class="text-white text-lg rajdhani-medium text-justify capitalize">
          who am i?
        </h1>

        <img class="img" src="/node-bad.svg" alt="my image"/>

        <p class="text-white text-md rajdhani-medium">
          Sanibonani, Igama lami ngingu
          <span class="text-violet-500 condensed-bold text-lg"
            >Sakhile Dumisa</span
          >. I am a
          <span class="text-violet-500 condensed-bold text-lg"
            >beginner Node & Express.js</span
          >
          developer. NodeJs is a runtime environment that allows the execution
          of Javascript outside the browser
        </p>

        <p class="text-white text-md rajdhani-medium">
          I identify as both web & web app developer. The main difference
          between a
          <span class="text-violet-500 condensed-bold text-lg">Web App</span>
          and a
          <span class="text-violet-500 condensed-bold text-lg">Website</span> is
          that websites are
          <span class="text-violet-500 condensed-bold text-lg">static</span>
          while web apps are
          <span class="text-violet-500 condensed-bold text-lg">dynamic</span>,
          this means that they communicate with the server to send and receive
          data through
          <span class="text-violet-500 condensed-bold text-lg"
            >Http requests</span
          >.
        </p>
      </article>

      <article
        class="bg-gray-800 min-w-[300px] max-w-[500px] py-4 px-4 rounded-lg shadow flex flex-col gap-4 items-center justify-center">
        <h1 class="text-white text-lg rajdhani-medium text-justify capitalize">
          current activities
        </h1>
        <div class="flex flex-col items-center justify-center gap-4">
          <img
            class="img"
            src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"
            alt="my image"
            class="w-[200px]" />
          <img src="/express-svgrepo-com.svg" alt="express" class="w-[150px]" />
        </div>

        <p class="text-white text-md rajdhani-medium">
          I'm currently learning
          <span class="text-violet-500 condensed-bold text-lg"
            >Backend development</span
          >, diving deeper into different technologies used for storing data
          (databases), user authentication and many more&hellip;
        </p>

        <p class="text-white text-md rajdhani-medium">
          I'm also studying
          <span class="text-violet-500 condensed-bold text-lg"
            >Bis Information Science</span
          >
          at the
          <a
            href="https://www.up.ac.za/"
            target="_blank"
            class="text-violet-500 condensed-bold text-lg"
            >University of Pretoria</a
          >, doing my ${new Date().getFullYear() - 2023 + 1}<sup>nd</sup> year.
        </p>
      </article>

      <article
        class="bg-gray-800 min-w-[300px] max-w-[500px] py-4 px-4 rounded-lg shadow flex flex-col gap-4 items-center justify-center">
        <h1 class="text-white text-lg rajdhani-medium text-justify capitalize">
          pending activities
        </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="ReactJs"
            class="w-[200px]" />


       <p class="text-white text-md rajdhani-medium">After competing <span class="text-violet-500 condensed-bold text-lg">backend development</span>, I am yet to resume learning <span class="text-violet-500 condensed-bold text-lg">ReactJs</span>, <span class="text-violet-500 condensed-bold text-lg">Typescript</span>, & <span class="text-violet-500 condensed-bold text-lg">python</span>. I'll consider learning more languages after accomplishing this goal&hellip;</p>
      </article>`;

 document.querySelector(
   "#skills"
 ).innerHTML = `<main class="flex flex-col gap-4 items-center justify-center flex-wrap">
<h1 class="text-violet-600 rajdhani-medium text-2xl uppercase">basic skills</h1>

<div class="flex flex-row gap-4 items-center justify-center">

<div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress">
<img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="html">
</div>
          
<div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress"><img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="css" /></div>

<div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress"><img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt="js" /></div>

<div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress"><img src="https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg" alt="sass" /></div>

<div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress"><img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwindcss" /></div>


        </div>
</main>

<main class="flex flex-col gap-4 items-center justify-center flex-wrap">
<h1 class="text-violet-600 rajdhani-medium text-2xl uppercase"> backend development</h1>

<div class="flex flex-row gap-4 items-center justify-center">
          
<div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress"><img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" alt="nodejs" /></div>

<div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress"><img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="expressjs" /></div>

</div></main>

<main class="flex flex-col gap-4 items-center justify-center flex-wrap">
<h1 class="text-violet-600 rajdhani-medium text-2xl uppercase">Databases</h1>

<div class="flex flex-row gap-4 items-center justify-center">

<div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress"><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" /></div>

<div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress"><img src="https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" alt="supabase" /></div>

<div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress"><img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="mongodb" /></div>

</div></main>

<main class="flex flex-col gap-4 items-center justify-center flex-wrap">
<h1 class="text-violet-600 rajdhani-medium text-2xl uppercase">Tooling</h1>

<div class="flex flex-row gap-4 items-center justify-center">

 <div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" class="w-[70%]" alt="Vitejs" /></div>

<div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress"><img src="https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg" alt="npmjs" /></div>

</div></main>

<main class="flex flex-col gap-4 items-center justify-center flex-wrap">
<h1 class="text-violet-600 rajdhani-medium text-2xl uppercase">version control</h1>

<div class="flex flex-row gap-4 items-center justify-center">
        
<div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" /></div>

<div class="flex items-center justify-center bg-gray-800 rounded-md w-[150px] h-[150px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:cursor-progress"><img src="https://www.vectorlogo.zone/logos/github/github-tile.svg" alt="github"  class="w-[70%]" /></div>

</div></main>`;     
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