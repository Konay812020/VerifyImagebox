const database = [{
        question: "Choose Traffic Light ?",
        a: "../img/traffic.jpg",
        b: "../img/airport.jpg",
        c: "../img/mountain.jpg",
        d: "../img/ambulance.jpg",
        correctanswer: "a"
    },
    {
        question: "Choose ambulance ?",
        a: "../img/airport.jpg",
        b: "../img/ambulance.jpg",
        c: "../img/traffic.jpg",
        d: "../img/mountain.jpg",
        correctanswer: "b"
    },
    {
        question: "Choose mountain ?",
        a: "../img/mountain.jpg",
        b: "../img/traffic.jpg",
        c: "../img/ambulance.jpg",
        d: "../img/airport.jpg",
        correctanswer: "a"
    },
    {
        question: "Choose ariport ?",
        a: "../img/traffic.jpg",
        b: "../img/ambulance.jpg",
        c: "../img/taffic.jpg",
        d: "../img/airport.jpg",
        correctanswer: "d"
    },
]
// console.log(database);

const getcontainer = document.getElementById('container');
const getquestion = document.querySelector(".question");
const getanswer = document.querySelectorAll(".answer");

const geta_img = document.getElementById('a_img');
// console.log(geta_img);
const getb_img = document.getElementById('b_img');
const getc_img = document.getElementById('c_img');
const getd_img = document.getElementById('d_img');