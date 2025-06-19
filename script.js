var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.onclick = () => showSlide(index);
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.style.display = i === n ? "block" : "none";
    if (slide.querySelector("video")) {
      slide.querySelector("video").pause();
      slide.querySelector("video").currentTime = 0;
    }
  });

  if (slides[n].querySelector("video")) {
    slides[n].querySelector("video").play();
  }

  dots.forEach((dot, i) => {
    dot.className = i === n ? "dot active" : "dot";
  });

  slideIndex = n;
}

function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
}

setInterval(() => {
  changeSlide(1);
}, 5000);

showSlide(slideIndex);

// Fun Fact Generator
const Facts = [
  "IIT Bombay was established in 1958 as the second IIT in India.",
  "The campus spans over 550 acres at the foot of the scenic Powai Hills.",
  "IITB is known for Asia's largest college festival — Mood Indigo.",
  "The Central Library houses over 4 lakh books and journals.",
  "IITB has its own Olympic-size swimming pool, gymkhana, and sports complex.",
  "Every hostel has its own mess, TV room, and often a music or foosball room.",
  "Inter-hostel competitions like GC (General Championship) create healthy rivalries.",
  "Night canteens & chai breaks at 3 AM are part of the true IITB hostel vibe.",
  "Hostels feature 24/7 Wi-Fi, mess facilities, canteens, and recreational areas like table tennis and basketball courts.",
  "The campus has a rich biodiversity, with many species of birds and plants.",
  "IIT Bombay has a vibrant arts scene, with numerous cultural clubs and events.",
  "IITB's annual tech festival, Techfest, attracts participants from around the world.",
  "The campus features a beautiful lake, gardens, and walking trails for relaxation and recreation.",
];

document.getElementById("FactBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * Facts.length);
  document.getElementById("FactDisplay").innerText = Facts[randomIndex];
});
