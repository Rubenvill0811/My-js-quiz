/* 
1- I need a timer, it needs to start when you hit the button.
1a- The timer needs to start at 60s and end at 0s.
1b- The timer should go down by one second every second.
    maybe there will be a penalty.
2 create multiple choice questions
2a show results 
2b have correct or incorrect sound effects play

highscore screen 
enter your initials screen with highschool

*/
let time = 5;
var timerStart = document.querySelector("#button-start");
//mayube store a list of possible quetsions
//maybe have a tracker for what question we are on

function timer() {
    //figure out a way to remove the start button or hide it
    const interval = setInterval(function(){
        document.getElementById("timer").innerHTML = time;
    time  = time -1
    if (time < 0 ) {
        clearInterval(interval);
    }
    }, 1000)
}

const questions = [
    {
        question: "What is a unique feature of a Lion?",
        a: "its tongue",
        b: "its trunk",
        c: "its hind legs",
        d: "its mane",
        correctAnswer: "d"
    },
    {
        question: "What is the Lion's native continent?",
        a: "North America",
        b: "South America",
        c: "Africa",
        d: "Europe",
        correctAnswer: "c"
    },
    {
        question: "What is a Lion's top speed?",
        a: "50mph",
        b: "25mph",
        c: "30mph",
        d: "35mph",
        correctAnswer: "a"
    },
    {
        question: "What is a Lion's favorite pastime?",
        a: "trash talking zebras",
        b: "racing with other Lions",
        c: "flirting with a lioness",
        d: "relaxing and lazing around",
        correctAnswer: "d"
    }
];


const writeQuestion=()=>{
    console.log("I can do this")

    ///set the text on some part of the page...maybve makes an ul or questions and options that are buttons
    //maybe have a next question button
}
const nextQuestion=()=>{

    writeQuestion(somevar)//where can we pass some var here that knows what question we are on
    //maybe qrite question needs to have a condition for if we passed nothing to it??
}
timerStart.addEventListener("click", timer); 
timerStart.addEventListener("click", writeQuestion);

//maybe listen on the page for someone clicking next quetsion

