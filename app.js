const database = [{
        question: "Choose Traffic Light ?",
        a: "./img/img/traffic.jpg",
        b: "./img/img/airport.jpg",
        c: "./img/img/mountain.jpg",
        d: "./img/img/ambulance.jpg",
        correctanswer: "a"
    },
    {
        question: "Choose ambulance ?",
        a: "./img/img/airport.jpg",
        b: "./img/img/ambulance.jpg",
        c: "./img/img/traffic.jpg",
        d: "./img/img/mountain.jpg",
        correctanswer: "b"
    },
    {
        question: "Choose mountaingit?",
        a: "./img/img/mountain.jpg",
        b: "./img/img/traffic.jpg",
        c: "./img/img/ambulance.jpg",
        d: "./img/img/airport.jpg",
        correctanswer: "a"
    },
    {
        question: "Choose ariport ?",
        a: "./img/img/traffic.jpg",
        b: "./img/img/ambulance.jpg",
        c: "./img/img/mountain.jpg",
        d: "./img/img/airport.jpg",
        correctanswer: "d"
    },
]
// console.log(database[0].question);

const getcontainer = document.getElementById('container');
const getquestion = document.getElementById("question");
const getanswers = document.querySelectorAll(".answer");

const geta_img = document.getElementById('a_img');
// console.log(geta_img);
const getb_img = document.getElementById('b_img');
const getc_img = document.getElementById('c_img');
const getd_img = document.getElementById('d_img');
const getbtn = document.getElementById('btn');
let currentidx = 0;
let score = 0;

startquestion();

function startquestion() {
    const currentqes = database[currentidx];

    // console.log("i a m owrking")

    getquestion.textContent = currentqes.question;
    // console.log(getquestion)

    geta_img.src = currentqes.a;
    // console.log(geta_img.src)
    getb_img.src = currentqes.b;
    getc_img.src = currentqes.c;
    getd_img.src = currentqes.d;
}


function getsingleanswer() {
    let answer;
    // console.log(answer);

    // console.log(getanswers);

    getanswers.forEach(function (getanswer) {
        //console.log(getanswer);
        // console.log(getanswer.id);

        if (getanswer.checked) {
            answer = getanswer.id;
        }

    });
    // console.log(answer);
    return answer;

}
// getsingleanswer();

getbtn.addEventListener('click', function () {
    // console.log("I am working");
    const answer = getsingleanswer();
    // console.log(answer);

    if (answer) {
        if (answer === database[currentidx].correctanswer) {
            score++;
        }
        // console.log(answer);
        currentidx++;
        // console.log(currentidx);

        if (currentidx < database.length) {
            startquestion();
        } else {

        }

        console.log(score);

    } else {
        window.alert("Choose one answer")
    }
});

// 19BT