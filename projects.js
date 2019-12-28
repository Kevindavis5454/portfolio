
function quizAppStart() {
    $('#quiz-app-button').on('click', function(event) {
        event.preventDefault();
        quizAppDescription();
    });
    console.log('`quizAppStart` ran');
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
    $('#project-description-block').html(quizAppInfo);

    console.log('`quizAppDescription` ran');
}

function sproutAppStart () {
    $('#sprouts-button').on('click', function(event){
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
    `)
    $('#project-description-block').html(sproutsAppInfo);
}



function handleProjectDescriptions() {
    quizAppStart();
    sproutAppStart()
}

$(handleProjectDescriptions);