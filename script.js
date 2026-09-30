const clues = [

    {
        title: "YOUR FIRST LOCATION",

        text: `
            Where shadows sleep and lost things hide,<br><br>
            Look beneath the place where you rest at night. 👀
        `,

        answers: [
            "under the bed",
            "under bed",
            "bed"
        ]
    },

    {
        title: "A TRAINER NEEDS THEIR BRAIN",

        text: `
            A Trainer needs their brain to survive the day…<br><br>
            Check where you carry your college life away. 🎓
        `,

        answers: [
            "college bag",
            "bag"
        ]
    },

    {
        title: "THE LEGENDARY BEAST",

        text: `
            A legendary beast has found a cave,<br><br>
            Beneath the cardboard, your treasure awaits. 🐉
        `,

        answers: [
            "lulu's tent",
            "lulus tent",
            "lulu tent",
            "tent"
        ]
    },

    {
        title: "KITCHEN SECRETS",

        text: `
            Where culinary legends are supposedly made,<br><br>
            Search where kitchen secrets are stored away. 👨‍🍳
        `,

        answers: [
            "kitchen cabinet",
            "cabinet",
            "kitchen"
        ]
    },

    {
        title: "THE SECRET DRAWER",

        text: `
            Where battles with books are fought,<br><br>
            Search the secret place where small things get lost. 📚
        `,

        answers: [
            "study table drawer",
            "table drawer",
            "drawer"
        ]
    },

    {
        title: "A THOUSAND STORIES",

        text: `
            Hundreds of stories stand in a row,<br><br>
            Somewhere among them, your next clue will show. 📖
        `,

        answers: [
            "bookshelf",
            "book shelf",
            "shelf",
            "books"
        ]
    },

    {
        title: "STAY COOL",

        text: `
            Why fidget when you're already cool? 😎<br><br>
            Look beneath the thing that keeps you chilled. ❄️
        `,

        answers: [
            "under the cooler",
            "under cooler",
            "cooler"
        ]
    },

    {
        title: "BATTLE OUTFITS",

        text: `
            Before every adventure, a Trainer must dress.<br><br>
            Search where your battle outfits rest. 👕
        `,

        answers: [
            "clothes cupboard",
            "cupboard",
            "clothes"
        ]
    },

    {
        title: "HOT AND BRIGHT",

        text: `
            Your next destination is hot and bright,<br><br>
            Where things go in… and come out just right. 🔥
        `,

        answers: [
            "air fryer",
            "airfryer",
            "fryer"
        ]
    }

];


let currentClue = 0;


/* =========================================
   LOAD CLUE
   ========================================= */

function loadClue() {

    const clue = clues[currentClue];

    document.getElementById("clue-label").textContent =
        `CLUE ${String(currentClue + 1).padStart(2, "0")}`;

    document.getElementById("clue-title").textContent =
        clue.title;

    document.getElementById("clue-text").innerHTML =
        clue.text;

    document.getElementById("progress-count").textContent =
        String(currentClue + 1).padStart(2, "0");

    document.getElementById("progress-label").textContent =
        `MISSION PROGRESS: ${currentClue + 1} / ${clues.length}`;

    const progress =
        (currentClue / clues.length) * 100;

    document.getElementById("progress-fill").style.width =
        `${progress}%`;

    document.getElementById("answer").value = "";

    document.getElementById("feedback").textContent = "";

    document.getElementById("feedback").className = "";

    document.getElementById("success-box").classList.remove("show");

    document.getElementById("answer").focus();
}


/* =========================================
   NORMALISE ANSWER
   ========================================= */

function normaliseAnswer(answer) {

    return answer
        .toLowerCase()
        .replace(/[’']/g, "")
        .replace(/\s+/g, " ")
        .trim();

}


/* =========================================
   CHECK ANSWER
   ========================================= */

function checkAnswer() {

    const input = normaliseAnswer(
        document.getElementById("answer").value
    );

    const acceptedAnswers = clues[currentClue].answers.map(
        normaliseAnswer
    );

    const feedback =
        document.getElementById("feedback");


    if (acceptedAnswers.includes(input)) {

        feedback.textContent = "";
        feedback.className = "";

        document.getElementById("success-message").innerHTML =
            `
            Correct, Agent.<br><br>
            Your next destination has been located.
            `;

        document
            .getElementById("success-box")
            .classList.add("show");

    } else {

        feedback.textContent =
            "ACCESS DENIED. Try again, Agent.";

        feedback.className =
            "wrong-answer";

    }

}


/* =========================================
   NEXT CLUE
   ========================================= */

function nextClue() {

    currentClue++;

    if (currentClue >= clues.length) {

        completeMission();

        return;

    }

    loadClue();

}


/* =========================================
   MISSION COMPLETE
   ========================================= */

function completeMission() {

    document.getElementById("progress-fill").style.width =
        "100%";

    document.querySelector(".clue-container").innerHTML = `

        <div class="mission-complete">

            <p class="classified">
                // TRANSMISSION RECEIVED //
            </p>

            <h1>
                MISSION<br>
                ACCOMPLISHED.
            </h1>

            <p class="complete-text">
                Congratulations, Agent Malhar.
            </p>

            <div class="completion-stats">

                <p>
                    <span>CLUES SOLVED</span>
                    09 / 09
                </p>

                <p>
                    <span>PRESENTS LOCATED</span>
                    ✓
                </p>

                <p>
                    <span>MISSION STATUS</span>
                    COMPLETE
                </p>

            </div>

            <p class="final-note">
                You survived the operation.
                <br>
                But we're not done with you yet.
            </p>

            <a href="archives.html" class="mission-button">
                ENTER THE ARCHIVES →
            </a>

        </div>

    `;

}


/* =========================================
   ENTER KEY SUPPORT
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadClue();

        const answerInput =
            document.getElementById("answer");

        answerInput.addEventListener(
            "keypress",
            function (event) {

                if (event.key === "Enter") {

                    checkAnswer();

                }

            }
        );

    }
);
