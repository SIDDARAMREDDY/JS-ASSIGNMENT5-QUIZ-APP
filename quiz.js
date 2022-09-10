var questions = [{
        id: 1,
        question: "Q.1: Which was not one of Voldemort's Horcruxes ?",
        options: ["Harry", "Nagini", "Helga's Diadem", "Tom Riddle's Diary"],
        name: "answer1",
        answer: "Harry",
        selected: null,
    },
    {
        id: 2,
        question: "Q.2: Which of these are not one of Hagrid's many pets ?",
        options: ["Grawp", "Fluffy", "Aragog", "Noberta"],
        name: "answer2",
        answer: "Grawp",
        selected: null,
    },
    {
        id: 3,
        question: "Q.3: Which class did Severus Snape always want to teach ?",
        options: ["Potions", "Charms", "Defense Against Dark Arts", "Transfiguration"],
        name: "answer3",
        answer: "Defense Against Dark Arts",
        selected: null,
    },
    {
        id: 4,
        question: "Q.4: Which Hogwarts house did Moaning Myrtle belong in ?",
        options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
        name: "answer4",
        answer: "Ravenclaw",
        selected: null,
    },
    {
        id: 5,
        question: "Q.5: What class did Neville end up teaching at Hogwarts ?",
        options: ["Astronomy", "Herbology", "Charms", "Muggle Studies"],
        name: "answer5",
        answer: "Herbology",
        selected: null,
    }
];


var result = 0;
/* <div class="Question">
                    <h3>Q.1: What is your name ? </h3>
                    <p><input type="radio" name="q1" value="reddy">  Siddaram Reddy </p>
                    <p><input type="radio" name="q1" value="reddy">  Siddaram Reddy </p>
                    <p><input type="radio" name="q1" value="reddy">  Siddaram Reddy </p>
                    <p><input type="radio" name="q1" value="reddy">  Siddaram Reddy </p>
                    <hr>
    </div> */
var mainContainer = document.getElementById('main-container');
var questionsContainer = document.getElementById('questions-container');

const generateQuestion = (data) => {
    var mainBlock = document.createElement('div');
    mainBlock.className = "Question";

    var questionHeading = document.createElement('h3');
    questionHeading.innerHTML = data.question;
    mainBlock.appendChild(questionHeading);

    for (var i = 0; i < data.options.length; i++) {
        var para = document.createElement('p');
        para.id = data.id;
        para.onchange = function(e) {
            questions[data.id - 1].selected = e.target.value;
        }

        var radioButton = document.createElement('input');
        radioButton.type = "radio";
        radioButton.name = data.name;
        radioButton.value = data.options[i];
        para.appendChild(radioButton);

        optionName = document.createTextNode(data.options[i]);
        para.appendChild(optionName);
        mainBlock.appendChild(para);
    }
    horizontalLine = document.createElement('hr');
    mainBlock.appendChild(horizontalLine);
    return mainBlock;
}

for (var j = 0; j < questions.length; j++) {
    questionsContainer.appendChild(generateQuestion(questions[j]));

}

function fetchResult(e) {
    e.preventDefault();
    var myRes = 0;
    for (var j = 0; j < questions.length; j++) {
        if (questions[j].selected === questions[j].answer) {
            myRes += 1;
        }
    }
    document.getElementById("fscore").innerText = myRes;
}


var btn = document.getElementById('submit-btn');
var form = document.getElementById('form');
form.onsubmit = function(e) {
    fetchResult(e);
};