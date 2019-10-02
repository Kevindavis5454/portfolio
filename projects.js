function quizAppStart() {
    $('#quiz-app-button').on('click', function(event) {
        quizAppDescription();
    });
    console.log('`quizAppStart` ran');
}


function quizAppDescription() {
    const quizAppInfo = $(`
    <div class="project-info" aria-live="assertive">
                    <h2>Australian Shepherd Quiz</h2>
                    <p>Uses HTML5, CSS, Javascript, JQuery</p>
                    <a href="https://Kevindavis5454.github.io/quiz-app-final-kd">Live Page</a>
                    <a href="https://github.com/Kevindavis5454/quiz-app-final-kd">Repo</a>

                    <img class="project-pic" src="https://Kevindavis5454.github.io/portfolio-greybox/assets/quizappscreen.png" alt="Screen shot of Australian Shepherd Quiz">
`);
    $('#project-description-block').html(quizAppInfo);

    console.log('`quizAppDescription` ran');
}



function handleProjectDescriptions() {
    quizAppStart();
}

$(handleProjectDescriptions);