const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() { 
    links.classList.toggle('show-links');
})

/* 

====================
like dislike buttons 
====================

*/
// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
      //count decreases to 1
    if (styles.contains("decrease")) {
      count -= 1;
      //count increases to 2
    } else if (styles.contains("increase")) {
      count += 2;
      //reset
    } else if (styles.contains("reset")) {
      count = 0;
    }
   
 
    if (count > 0) {
      value.style.color = "white";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

/* 

============
color change 
============

*/
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    let hexColor = '#';
    for(let i = 0;i<6;i++){
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() *  hex.length)
}

/* 

=======
Reviews
=======

*/
const reviews = [
  {
    id: 1,
    name: 'Olivia Roger',
    job: 'Flight attendant',
    img: 'https://i.pinimg.com/564x/eb/f1/d9/ebf1d984747d9fda374a3c69894c0e04.jpg',
    text: '"As a dedicated flight attendant, my experience with Air Canada has been nothing short of exceptional. From the extensive training programs to the warm and inclusive atmosphere onboard, this airline truly values its crew. The emphasis on passenger comfort and safety is evident in every aspect of our service. The team spirit among the cabin crew creates a positive working environment, and the company\'s commitment to diversity and inclusion makes everyone feel valued. Air Canada not only ensures the well-being of its passengers but also prioritizes the well-being and professional growth of its crew. I am proud to be a part of this airline, where each flight feels like a journey filled with warmth, care, and a genuine commitment to excellence."',
  },
  {
    id: 2,
    name: 'John William',
    job: 'Pilot',
    img: 'https://i.pinimg.com/564x/e9/30/03/e93003408d0a20de3bf76d43d709958b.jpg',
    text: '"As a seasoned pilot with over two decades of experience, I can confidently say that Air Canada stands out as a top-tier airline in terms of safety, professionalism, and overall experience. The training provided to pilots is rigorous and comprehensive, ensuring that we are always well-prepared for any situation that may arise. The fleet is modern and well-maintained, and the company\'s commitment to safety is evident in every aspect of our operations. I am proud to be a part of the Air Canada team and would recommend it to any aspiring pilot."',
  },
  {
    id: 3,
    name: 'Nicolous James',
    job: 'pilot',
    img: 'https://i.pinimg.com/564x/6e/1e/1b/6e1e1b77b5de2a149f285f74eff758bd.jpg',
    text: '"Having flown for various airlines throughout my career, I can confidently say that Air Canada stands out for its commitment to excellence. From the moment you step into the cockpit, you can feel the dedication to safety and customer satisfaction. The company\'s investment in cutting-edge technology and resources makes our job as pilots smoother and more efficient, allowing us to focus on delivering a superior flying experience to our passengers. Flying with Air Canada is not just about reaching a destination; it\'s about enjoying a seamless journey with a team that prioritizes professionalism and service."',
  },
  {
    id: 4,
    name: 'Sarah McGill',
    job: 'pilot',
    img: 'https://i.pinimg.com/564x/fb/69/66/fb69661dcaffc10bb84ca2209aaecf85.jpg',
    text: '"Joining Air Canada as a first officer has been a career highlight for me. The support and camaraderie among the flight crew are unmatched, creating a positive and collaborative work environment. The company\'s emphasis on continuous training and development not only ensures that we are equipped with the latest skills and knowledge but also fosters a culture of growth and improvement. Flying with Air Canada is not just a job; it\'s a fulfilling and rewarding experience that I look forward to every day."',
  }
];

// select items
const img = document.getElementById('person-img');
const employee = document.getElementById('employee');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const resetBtn = document.querySelector('.reset-btn');
const endBtn = document.querySelector('.end-btn');


// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  employee.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});


// reset button, that goes to the start of the review
resetBtn.addEventListener('click', function () {
    currentItem = 0;
    showPerson();
});

// end button , that goes to the end of the review
endBtn.addEventListener('click', function () {
  currentItem = reviews.length - 1;
  showPerson();
});

/* 

==============
special offers
==============

*/
const flightOffers = [
  "Flight offer 1: Special Discount to Paris",
  "Flight offer 2: Explore Tokyo with Air Canada",
  "Flight offer 3: Fly to New York at Unbeatable Prices",
  "Flight offer 4: Discover the Beauty of Rome with Air Canada",
  "Flight offer 5: Explore the Wonders of Sydney"
];

const flightOfferDisplay = document.getElementById('flightOffer');
const randomButton = document.getElementById('randomButton');

randomButton.addEventListener('click', showRandomFlightOffer);

function showRandomFlightOffer() {
  const randomIndex = Math.floor(Math.random() * flightOffers.length);
  const randomOffer = flightOffers[randomIndex];
  flightOfferDisplay.textContent = randomOffer;
}
