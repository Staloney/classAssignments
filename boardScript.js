const reviews = [

    {
        name:"Michael",
        title: "Boss",
        headshot: 
        "manCoffee.jpg",
        content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem expedita et iure harum minima quaerat fugit, minus commodi, repudiandae delectus dicta numquam culpa, atque asperiores. Sed adipisci consectetur dolorum!",
        
    },

    {
        name:"Dwight",
        title: "Assistant To The Boss",
        headshot: 
        "headshot.jpg",
        content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem expedita et iure harum minima quaerat fugit, minus commodi, repudiandae delectus dicta numquam culpa, atque asperiores. Sed adipisci consectetur dolorum!",
        
    },

    {
        name:"Jim",
        title: "Paper Pusher",
        headshot: 
        "man3.jpg",
        content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem expedita et iure harum minima quaerat fugit, minus commodi, repudiandae delectus dicta numquam culpa, atque asperiores. Sed adipisci consectetur dolorum!",
        
    },

    {
        name:"Pam",
        title: "Paper Pusher",
        headshot: 
        "pam.jpg",
        content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem expedita et iure harum minima quaerat fugit, minus commodi, repudiandae delectus dicta numquam culpa, atque asperiores. Sed adipisci consectetur dolorum!",
        
    }

    
]

var currentIndex = 0;

function leftButton() {
    // Sets my index so I can page through
    // Allows me to go choose which index in my array to go to 
    if (currentIndex > 0) {
        currentIndex--;
    }
    else currentIndex = 3;
    
    
    // Get the elements in the HTML document
    const nameElement = document.getElementById("name");
    const titleElement = document.getElementById("title");
    const contentElement = document.getElementById("content");
    const headshotElement = document.getElementById("headshot");
    
    // Get the review from the array
    const review = reviews[currentIndex];
    
    // Update the elements in the HTML document with the review information
    nameElement.innerHTML = review.name;
    titleElement.innerHTML = review.title;
    headshotElement.src = review.headshot;
    contentElement.innerHTML = review.content;
}


function rightButton() {
    // Allows me to go choose which index in my array to go to 
    if (currentIndex < 3) {
        currentIndex++;
    }
    else currentIndex = 0;
      
    // Get the elements in the HTML document
    const nameElement = document.getElementById("name");
    const titleElement = document.getElementById("title");
    const contentElement = document.getElementById("content");
    const headshotElement = document.getElementById("headshot");

    const review = reviews[currentIndex]
    
    // Update the elements in the HTML document with the review information
    nameElement.innerHTML = review.name;
    titleElement.innerHTML = review.title;
    headshotElement.src = review.headshot;
    contentElement.innerHTML = review.content;
}


function randomButton() {
    // Get the elements in the HTML document
    const nameElement = document.getElementById("name");
    const titleElement = document.getElementById("title");
    const contentElement = document.getElementById("content");
    const headshotElement = document.getElementById("headshot");

    var randIndex = Math.floor(Math.random()* reviews.length);

    // Get the index of the current review to display
    const currentIndex = randIndex;
    
    // Get the review from the array
    const review = reviews[currentIndex];
    
    // Update the elements in the HTML document with the review information
    nameElement.innerHTML = review.name;
    titleElement.innerHTML = review.title;
    headshotElement.src = review.headshot;
    contentElement.innerHTML = review.content;
}


window.onload = function() {
    randomButton();
};
   

