function quizAppStart(ele, func) {
  $("#quiz-app-button").on("click", function (event) {
    event.preventDefault();
    quizAppDescription();
  });
  console.log("`quizAppStart` ran");
}

function quizAppDescription() {
  const quizAppInfo = $(`
    <div class="project-info" aria-live="assertive">
                    <h2>Australian Shepherd Quiz</h2>
                    <p>AA fun, light hearted, Quiz App about Australian Shepherds for
              anyone who would love to know more about the best breed of
              dogs!</p>
                    <p>Uses HTML5, CSS, Javascript, JQuery</p>
                    <a target="_blank" href="https://kevindavis5454.github.io/australian-shepherd-quiz/">Live Page</a>
                    <a target="_blank" href="https://github.com/Kevindavis5454/australian-shepherd-quiz.git">Repo</a>

                    <img class="project-pic" src="https://Kevindavis5454.github.io/portfolio/assets/quizappscreen.png" alt="Screen shot of Australian Shepherd Quiz">
`);
  $("#project-description-block").html(quizAppInfo);
}

function sproutAppStart() {
  $("#sprouts-button").on("click", function (event) {
    event.preventDefault();
    sproutsDescritpion();
  });
}

function sproutsDescritpion() {
  const sproutsAppInfo = $(`
    <div class="project-info" aria-live="assertive">
                    <h2>Sprouts and Showers</h2>
                    <p>An app for the aspiring gardener to help plan out gardens with
              growing information. This app was created after seeing a lack of
              centralized data on growing and gardening.</p>
                    <p>Uses HTML5, CSS, Javascript, JQuery</p>
                    <a target="_blank" href="https://kevindavis5454.github.io/sprouts-and-showers/">Live Page</a>
                    <a target="_blank" href="https://github.com/Kevindavis5454/sprouts-and-showers.git">Repo</a>

                    <img class="project-pic" src="https://Kevindavis5454.github.io/portfolio/assets/sprouts-landing-page.png" alt="Screen shot of Sprouts and Showers App">
    `);
  $("#project-description-block").html(sproutsAppInfo);
}

function notefulAppStart() {
  $("#noteful-button").on("click", function (event) {
    event.preventDefault();
    notefulDescritpion();
  });
}

function notefulDescritpion() {
  const notefulAppInfo = $(`
    <div class="project-info" aria-live="assertive">
                    <h2>Noteful</h2>
                    <p>A note taking app for anyone who has trouble keeping their life
              organized. This app was created after seeing a need to have a more
              nicely formatted system for taking notes.</p>
                    <p>Uses HTML5, CSS, Javascript, React, Node.js, Express, PostgreSQL, Knex </p>
                    <a target="_blank" href="https://noteful-beta.now.sh/">Live Page</a>
                    <a target="_blank" href="https://github.com/Kevindavis5454/noteful.git">Repo</a>

                    <img class="project-pic" src="https://Kevindavis5454.github.io/portfolio/assets/noteful-screen.png" alt="Screen shot of Noteful App">
    `);
  $("#project-description-block").html(notefulAppInfo);
}

function cutthroatAppStart() {
  $("#cut-losers-button").on("click", function (event) {
    event.preventDefault();
    cutthroatDescription();
  });
}

function cutthroatDescription() {
  const cutthroatAppInfo = $(`
    <div class="project-info" aria-live="assertive">
                    <h2>Cutthroat Losers</h2>
                    <p>An app for anyone who is trying to lose those extra pounds. This
              app helps inject some fun into a weight loss competition. This app
              was created after personally wanting a more fun and interesting
              way to do a weight loss competition</p>
                    <p>Uses HTML5, CSS, Javascript, React, Node.js, Express, PostgreSQL, Knex </p>
                    <a target="_blank" href="https://cutthroat-losers-app.herokuapp.com/">Live Page</a>
                    <a target="_blank" href="https://github.com/Kevindavis5454/cutthroat-losers.git">APP Repo</a>
                    <a target="_blank" href="https://github.com/LadyLudo/KT_CutthroatLosers-api.git">API Repo</a>

                    <img class="project-pic" src="https://Kevindavis5454.github.io/portfolio/assets/CLosers1.png" alt="Screen shot of Cutthroat Losers App">
    `);
  $("#project-description-block").html(cutthroatAppInfo);
}

function tinyLunchesAppStart() {
  $("#tiny-lunches-buttons").on("click", function (event) {
    event.preventDefault();
    tinyLunchesDescription();
  });
}

function tinyLunchesDescription() {
  const tinyLunchesAppInfo = $(`
    <div class="project-info" aria-live="assertive">
                    <h2>Tiny Lunches</h2>
                    <p>An App to help new sleep deprived parents easily make lunches for
              their kids. This app was created after many conversations with
              parents in the park, and I saw a need to make this process easier
              for new parents.</p>
                    <p>Uses HTML5, CSS, Javascript, React, Node.js, Express, PostgreSQL, Knex </p>
                    <a target="_blank" href="https://tiny-lunches-app.vercel.app/">Live Page</a>
                    <a target="_blank" href="https://github.com/Kevindavis5454/tiny-lunches-app.git">APP Repo</a>
                    <a target="_blank" href="https://github.com/LadyLudo/tinylunchesapi.git">API Repo</a>

                    <img class="project-pic" src="https://Kevindavis5454.github.io/portfolio/assets/TinyLunches.png" alt="Screen shot of Tiny Lunches App">
    `);
  $("#project-description-block").html(tinyLunchesAppInfo);
}

function handleProjectDescriptions() {
  quizAppStart();
  sproutAppStart();
  notefulAppStart();
  cutthroatAppStart();
  tinyLunchesAppStart();
}

$(handleProjectDescriptions);
