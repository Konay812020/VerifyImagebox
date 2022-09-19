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
        question: "Choose mountain ?",
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
        c: "./img/img/taffic.jpg",
        d: "./img/img/airport.jpg",
        correctanswer: "d"
    },
]
// console.log(database[0].question);

const getcontainer = document.getElementById('container');
const getquestion = document.getElementById("question");
const getanswer = document.querySelectorAll(".answer");

const geta_img = document.getElementById('a_img');
// console.log(geta_img);
const getb_img = document.getElementById('b_img');
const getc_img = document.getElementById('c_img');
const getd_img = document.getElementById('d_img');

startquestion();

function startquestion() {

    console.log("i a m owrking")

    getquestion.textContent = database[0].question;
    // console.log(getquestion)

    geta_img.src = database[0].a;
    console.log(geta_img.src)
    getb_img.src = database[0].b;
    getc_img.src = database[0].c;
    getd_img.src = database[0].d;
}


// 19BT