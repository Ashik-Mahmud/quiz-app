// Getting Question And Answer here 

let questions = [{
        num: 1,
        answer: "Hyper Text Markup Language",
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]

    },
    {
        num: 2,
        answer: "Cascading Style Sheet",
        question: "What does CSS stand for?",
        options: [
            "Common Style Sheet",
            "Colorfull Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]

    },
    {
        num: 3,
        answer: "Hypertext Preprocessor",
        question: "What does PHP stand for?",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Proggraming",
            "Hypertext Preproggraming",
            "Hometext Preprocessor"
        ]

    },
    {
        num: 4,
        answer: "Structured Query Language",
        question: "What does SQL stand for?",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Structured Query Language",
            "Statement Question Language"
        ]

    },
    {
        num: 5,
        answer: "eXtensible Markup Language",
        question: "What does XML stand for?",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-proggram Lanuage",
            "eXamine Multiple Language"
        ]

    },
    {
        num: 6,
        answer: "700k Peoples",
        question: "How many freelancer has around in BD?",
        options: [
            "1 Milion Peoples",
            "800k Peoples",
            "600k Peoples",
            "700k Peoples"
        ]

    }
];
let question__rand = questions.sort(() => {
        return Math.random() - 0.5;
    })