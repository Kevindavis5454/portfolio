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
                    <p>Uses HTML5, CSS, Javascript, JQuery</p>
                    <a href="https://kevindavis5454.github.io/australian-shepherd-quiz/">Live Page</a>
                    <a href="https://github.com/Kevindavis5454/australian-shepherd-quiz.git">Repo</a>

                    <img class="project-pic" src="https://Kevindavis5454.github.io/portfolio/assets/quizappscreen.png" alt="Screen shot of Australian Shepherd Quiz">
`);
  $("#project-description-block").html(quizAppInfo);

  console.log("`quizAppDescription` ran");
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
                    <p>Uses HTML5, CSS, Javascript, JQuery</p>
                    <a href="https://kevindavis5454.github.io/sprouts-and-showers/">Live Page</a>
                    <a href="https://github.com/Kevindavis5454/sprouts-and-showers.git">Repo</a>

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
                    <p>Uses HTML5, CSS, Javascript, React, Node.js, Express, PostgreSQL, Knex </p>
                    <a href="https://noteful-beta.now.sh/">Live Page</a>
                    <a href="https://github.com/Kevindavis5454/noteful.git">Repo</a>

                    <img class="project-pic" src="https://Kevindavis5454.github.io/portfolio/assets/noteful-screen.png" alt="Screen shot of Noteful App">
    `);
  $("#project-description-block").html(notefulAppInfo);
}

function cuththroatAppStart() {
  $("#cut-losers-button").on("click", function (event) {
    event.preventDefault();
    cutthroatDescritpion();
  });
}

function cuththroatDescritpion() {
  const cuththroatAppInfo = $(`
    <div class="project-info" aria-live="assertive">
                    <h2>Cutthroat Losers</h2>
                    <p>Uses HTML5, CSS, Javascript, React, Node.js, Express, PostgreSQL, Knex </p>
                    <a href="https://cutthroat-losers-app.herokuapp.com/">Live Page</a>
                    <a href="https://github.com/Kevindavis5454/cutthroat-losers.git">APP Repo</a>
                    <a href="https://github.com/LadyLudo/KT_CutthroatLosers-api.git">API Repo</a>

                    <img class="project-pic" src="https://Kevindavis5454.github.io/portfolio/assets/CLosers1.png" alt="Screen shot of Cutthroat Losers App">
    `);
  $("#project-description-block").html(cuththroatAppInfo);
}

function tinyLunchesAppStart() {
  $("#tiny-lunches-buttons").on("click", function (event) {
    event.preventDefault();
    tinyLunchesDescritpion();
  });
}

function tinyLunchesDescritpion() {
  const tinyLunchesAppInfo = $(`
    <div class="project-info" aria-live="assertive">
                    <h2>Tiny Lunches</h2>
                    <p>Uses HTML5, CSS, Javascript, React, Node.js, Express, PostgreSQL, Knex </p>
                    <a href="https://tiny-lunches-app.vercel.app/">Live Page</a>
                    <a href="https://github.com/Kevindavis5454/tiny-lunches-app.git">APP Repo</a>
                    <a href="https://github.com/LadyLudo/tinylunchesapi.git">API Repo</a>

                    <img class="project-pic" src="https://Kevindavis5454.github.io/portfolio/assets/TinyLunches.png" alt="Screen shot of Tiny Lunches App">
    `);
  $("#project-description-block").html(tinyLunchesAppInfo);
}

function handleProjectDescriptions() {
  quizAppStart();
  sproutAppStart();
  notefulAppStart();
  cuththroatAppStart();
}

$(handleProjectDescriptions);
