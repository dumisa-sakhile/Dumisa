import './style.css'

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
