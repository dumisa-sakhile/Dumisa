import './style.css'

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


document.querySelector("#about").innerHTML = `<article
        class="bg-gray-800  w-[350px] lg:w-[500px] py-4 px-4 rounded-lg shadow flex flex-col gap-4 items-center justify-center">
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
        class="bg-gray-800  w-[350px] lg:w-[500px] py-4 px-4 rounded-lg shadow flex flex-col gap-4 items-center justify-center">
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
        class="bg-gray-800  w-[350px] lg:w-[500px] py-4 px-4 rounded-lg shadow flex flex-col gap-4 items-center justify-center">
        <h1 class="text-white text-lg rajdhani-medium text-justify capitalize">
          pending activities
        </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="ReactJs"
            class="w-[200px]" />


       <p class="text-white text-md rajdhani-medium">After competing <span class="text-violet-500 condensed-bold text-lg">backend development</span>, I am yet to resume learning <span class="text-violet-500 condensed-bold text-lg">ReactJs</span>, <span class="text-violet-500 condensed-bold text-lg">Typescript</span>, & <span class="text-violet-500 condensed-bold text-lg">python</span>. I'll consider learning more languages after accomplishing this goal&hellip;</p>
      </article>`;

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
